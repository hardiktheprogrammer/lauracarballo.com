When it comes to authentication it is highly recommended to use a third party service. There are multiple options like Auth0 that provide a very smooth user authentication that allows us developers to not worry about security issues.

These options are great to get you started into authentication patterns, I personally love using NextJS to build my applications so I completely recommend NextAuth for user authentication and authorization. It is simple and easy to make a secure and smooth user login flow making the whole authentication experience less overwhelming for those new to the topic.

But, for those getting a bit curious about how authentication really works, I have come up with this easy tutorial that will guide you through the process.

<img src="/authentication.jpg" alt="Authentication schema" width="100%"/>

As you can see, we’ll be using serverless functions to configure our backend. I also like using the serverless framework, since it simplifies a lot the process of developing and deploying serverless functions plus the serverless offline plugin which emulates AWS Lambda and API Gateway on your local machine.

With all of that said, let’s start!

### Set up

As I’ve said, the serverless framework makes it easy to set up our serverless environment.

Just run these commands on your command line:

`npm i`<br />
`npm i -g serverless` <br />
`npm i serverless-offline --save-dev`

After that, run `serverless` to verify that everything is working properly.

### serverless.yml

Briefly, the .yml serves as a “schema” for our serverless functions. It will set up our functions and give access to our user’s database on DynamoDB.

Going back to our basic structure we will be needing three lambda functions:

- /signup and /login: They will be in charge of making a POST request with the user’s information inside the login and sign up form.
- /profile: It will do a GET request of our user’s profile inside the DynamoDB database.

Regarding our database, to keep it simple, we’ll create a single-table database with a partition key (HASH) of userId and a sortKey (RANGE) which we’ll be our user’s profile.

```
service: users

frameworkVersion: "2"

provider:
 name: aws
 runtime: nodejs12.x
 environment:
   USERS_TABLE: { Ref: usersTable }
 iamRoleStatements:
   - Effect: Allow
     Action:
       - dynamodb:PutItem
       - dynamodb:GetItem
     Resource: { Fn::GetAtt: [usersTable, Arn] }

functions:
 signup:
   handler: handler.signup
   events:
     - http:
         path: signup
         method: post
         cors: true

 login:
   handler: handler.login
   events:
     - http:
         path: login
         method: post
         cors: true
 profile:
   handler: handler.profile
   events:
     - http:
         path: profile
         method: get
         cors: true

resources:
 Resources:
   usersTable:
     Type: AWS::DynamoDB::Table
     Properties:
       TableName: "users"
       AttributeDefinitions:
         - AttributeName: userId
           AttributeType: S
         - AttributeName: sortKey
           AttributeType: S
       KeySchema:
         - AttributeName: userId
           KeyType: HASH
         - AttributeName: sortKey
           KeyType: RANGE
       ProvisionedThroughput:
         ReadCapacityUnits: 1
         WriteCapacityUnits: 1

plugins:
 - serverless-offline
 - serverless-dotenv-plugin


```

Note: it is not required to install serverless-dotenv-plugin to use the .env file with the serverless framework.

If we run `sls deploy` in our command line, serverless will deploy our functions and for now, it will create our database inside DynamoDB.

### Utils folder

Before we start building our handlers, we need to ensure that our users are able to stay logged in while they browse through our application, consequently we need to create a cookie. This cookie will make sure that the user has been verified and is authorized to browse the private routes from our application.

To do so, we’ll create a JWT token containing our userId and we’ll store it inside a cookie. For better readability, I have kept the `generateToken` function inside a utils folder.

Note: Don’t forget to add the JWT secret inside the .env file.

```
const jwt = require("jsonwebtoken");
const DAYS = 24 * 60 * 60 * 1000;

const { JWT_SECRET } = process.env;

module.exports.generateToken = (userId, expireTimeInDays) => {
 let date = new Date();
 date.setTime(date.getTime() + expireTimeInDays * DAYS);
 const expires = date.toUTCString();

 const token = jwt.sign({ userId }, JWT_SECRET, {
   expiresIn: expireTimeInDays + "d",
 });

 return "token=" + token + ";" + "expires=" + expires + ";path=/;";
};

```

Also, we should never store our user’s password inside our database so we’ll use bcrypt for encryption. I have also added the hashing and matching functions inside our utils folder.

```
const bcrypt = require("bcrypt");
const ITERATIONS = 12;

module.exports.hashPassword = async (password) => {
 const hash = await bcrypt.hash(password, ITERATIONS);
 return hash;
};

module.exports.matchPassword = async (password, hash) => {
 const match = await bcrypt.compare(password, hash);
 return match;
};

```

### Setting up our handler functions

Let’s start with the signup handler. We will first parse our body containing our user’s data, hash the password calling the `hashPassword` function and add all of the user’s input inside our DynamoDB database.

Once that’s done, we’ll create a cookie that we’ll be returned inside the headers.

```
module.exports.signup = async (event) => {
 const { email, name, password } = JSON.parse(event.body);

 const hash = await hashPassword(password);

 if (email && password && name) {
   const userId = email;
   await dynamoDb
     .put({
       TableName: "users",
       Item: {
         userId: email,
         sortKey: "profile",
         name: name,
         password: hash,
       },
     })
     .promise();

   const cookie = generateToken(userId, 1);

   return {
     statusCode: 200,
     headers: {
       "Access-Control-Allow-Origin": "*",
       "Set-Cookie": cookie,
     },
     body: JSON.stringify({ success: true }),
   };
 } else {
   return {
     statusCode: 401,
     headers: {
       "Access-Control-Allow-Origin": "*",
     },
     body: JSON.stringify({
       success: false,
       error: "Enter a valid name/email/password",
     }),
   };
 }
};

```

Our login handler will do a `get` to our database and check if the user exists. We then decrypt the user’s password to check if the password is correct and finally create and send a cookie inside the headers.

```
module.exports.login = async (event) => {
 const { email, password } = JSON.parse(event.body);

 if (email && password) {
   const data = await dynamoDb
     .get({
       TableName: "users",
       Key: { userId: email, sortKey: "profile" },
     })
     .promise();

   if (!data.Item) {
     return {
       statusCode: 404,
       headers: {
         "Access-Control-Allow-Origin": "*",
       },
       body: JSON.stringify({ success: false, err: "user not found" }),
     };
   }

   const userPassword = data.Item.password;
   const matchedPassword = await matchPassword(password, userPassword);
   const userId = data.Item.userId;

   if (matchedPassword) {
     const cookie = generateToken(userId, 1);
     return {
       statusCode: 200,
       headers: {
         "Access-Control-Allow-Origin": "*",
         "Set-Cookie": cookie,
       },
       body: JSON.stringify({ success: true }),
     };
   } else {
     return {
       statusCode: 401,
       headers: {
         "Access-Control-Allow-Origin": "*",
       },
       body: JSON.stringify({ success: false, err: "incorrect password" }),
     };
   }
 }
};
```

Finally the profile handler gets the Cookie from the headers, we parse it with the help of the “cookie” package and verify our JWT to check if the token is still valid and therefore, the user is authorized. If true, then we request the data from the database.

```
module.exports.profile = async (event) => {
 const Cookie = event.headers.Cookie;
 const cookies = cookie.parse(Cookie);
 const token = cookies.token;

 let decoded;
 try {
   decoded = jwt.verify(token, JWT_SECRET);
 } catch (error) {
   return {
     statusCode: 401,
     headers: {
       "Access-Control-Allow-Origin": "*",
     },
     body: JSON.stringify({ success: false, err: "not authorized" }),
   };
 }

 const data = await dynamoDb
   .get({
     TableName: "users",
     Key: { userId: decoded.userId, sortKey: "profile" },
   })
   .promise();

 if (!data.Item) {
   return {
     statusCode: 404,
     headers: {
       "Access-Control-Allow-Origin": "*",
     },
     body: JSON.stringify({ success: false, err: "profile not found" }),
   };
 } else {
   return {
     statusCode: 200,
     headers: {
       "Access-Control-Allow-Origin": "*",
     },
     body: JSON.stringify({ success: true, name: data.Item.name }),
   };
 }
};

```
