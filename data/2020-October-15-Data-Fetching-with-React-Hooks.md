In this post I’ll be covering how to fetch data from a REST API using React Hooks. But before we get started, let me show you what we’ll be building first.

<Youtube videoId="uG0WNXAOdtE"/>

We’ll be creating our own Book App to keep track of every book that we’ve read throughout the year. To search through the books that I’ve read, I'll be using Google books API.

If you’re familiar with Google’s APIs you’ll already know that they require an API key. After you have this API key, your application can append the query parameter `key=yourAPIKey` to all request URLs.

_Note: For more **[info](https://developers.google.com/books/)** on how to get an API key._

## useEffect vs. Class components

For those making the switch from class components, it is easier to understand the process behind the mounting, updating and rendering of each component. But for the code newbies (like me) learning React through hooks, reading about the lifecycle of components may seem rare.
However, I think that understanding class components when running side effects can be very useful, especially for debugging.

I won’t be covering much on class components, just some basic information that helped me understand the code behind the ‘useEffect’ hook.

On one hand, when using class components, React divides the life of a component into three stages: mounting (component is inserted in the DOM), updating (changing its state) and unmounting (removing it from the DOM).

On the other hand, functional components do not differentiate between each of the component’s life cycles anymore and combine all of these side effects into one hook, the useEffect.

### So how does ‘useEffect’ work?

In our case, we want to access a REST API so we need to run a side effect to the component. We need to have in mind that the side effect always runs after the rendering. Therefore, the ‘useEffect’ hook runs every time after we create (mount) and update the component.

There are two types of side effects: require clean up or not.

We use a clean up when, once the update within the useEffect is completed, we need to forget about it. A good example are event listeners. To add a clean up we need to add a ‘return’ inside the useEffect function.

## Ready… Let’s get started!

The first thing we need to do is start our React App. You can either create your own App from scratch with

<code>npx create-react-app</code>

or go to my initial commit on **[github]()**.

First of all, we’ll keep it simple. Let’s create our App component which will render just an input and a search button:

```js
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>MY PERSONAL BOOKSHELF</h1>
        <div className="search-bar">
          <input type="text" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      <ul className="books">
        <li className="book-item">
          <div className="book__content">
            <div className="book__content">Book Title</div>
            <div className="book__content">Authors</div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
```

Inside our App component we’ll use useState() to set the local state to an object that contains an array of data. Then we are going to update its state to the data fetched from the API.

Our data will be rendered through a .map() function that returns each item’s image, title and authors.

```javascript
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({ items: [] });

  return (
    <div className="App">
      <header className="header">
        <h1>MY PERSONAL BOOKSHELF</h1>
        <div className="search-bar">
          <input type="text" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      <ul className="books">
        {data.items.map((item) => {
          return (
            <li className="book-item" key={item.id}>
              {item.volumeInfo.imageLinks && (
                <img
                  className="book__img"
                  src={item.volumeInfo.imageLinks.smallThumbnail}
                  alt=""
                />
              )}
              <div className="book__content">
                <div className="book__content">{item.volumeInfo.title}</div>
                <div className="book__content">{item.volumeInfo.authors}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
```

Now a side effect is required to access Google’s external API. Therefore, we first run a side effect after the component has mounted. That will fetch the data and finally re-render the component with the data in it.

To simplify data fetching I’ve used axios which removes the need to pass the results of the HTTPS request to the .json() method. Axios returns the data object you expect straight away. Redaxios simply provides the same axios API but in 800 bytes.

```javascript
import React, { useState, useEffect } from "react";
import axios from "redaxios";

const key = process.env.REACT_APP_KEY;

function App() {
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=sapien&key=${key}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>MY PERSONAL BOOKSHELF</h1>
        <div className="search-bar">
          <input type="text" />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      <ul className="books">
        {data.items.map((item) => {
          return (
            <li className="book-item" key={item.id}>
              {item.volumeInfo.imageLinks && (
                <img
                  className="book__img"
                  src={item.volumeInfo.imageLinks.smallThumbnail}
                  alt=""
                />
              )}
              <div className="book__content">
                <div className="book__content">{item.volumeInfo.title}</div>
                <div className="book__content">{item.volumeInfo.authors}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
```

The tricky part is, that when using useState within useEffect we are updating the component, so after the update, the component re-renders again. This can be a problem when fetching data from an API because we are fetching data inside a loop in which we’re updating and re-rendering indefinitely.

To solve this problem, you can tell react how to skip applying an effect if certain values haven’t changed between re-renders. That’s when we write [] as a second argument.

_Note: Using an async function directly in React useEffect isn’t allowed as async functions return a promise. The useEffect hook should only return nothing or a clean up function._

## Adding a query

Le’ts try to add a query parameter to our API so we can search through the Google Books library. We can do this by adding a useState hook that sets the query to the value typed into the input field. Consequently, we need to pass an event listener through the onChange function to save the typed value and setQuery to that value.

```javascript
import React, { useState, useEffect } from "react";
import axios from "redaxios";

const key = process.env.REACT_APP_KEY;

function App() {
  const [data, setData] = useState({ items: [] });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=sapien&key=${key}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>MY PERSONAL BOOKSHELF</h1>
        <div className="search-bar">
          <input
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            type="text"
            value={query}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      <ul className="books">
        {data.items.map((item) => {
          return (
            <li className="book-item" key={item.id}>
              {item.volumeInfo.imageLinks && (
                <img
                  className="book__img"
                  src={item.volumeInfo.imageLinks.smallThumbnail}
                  alt=""
                />
              )}
              <div className="book__content">
                <div className="book__content">{item.volumeInfo.title}</div>
                <div className="book__content">{item.volumeInfo.authors}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
```

Also, a small modification on Google’s Api needs to be made so we can pass ‘query’ for our search.

```javascript
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${key}`
    );
    setData(result.data);
  };
  fetchData();
}, [query]);
```

To finish up we need a button that triggers the search so we’ll add an onClick function to our existing button.

```javascript
import React, { useState, useEffect } from "react";
import axios from "redaxios";

const key = process.env.REACT_APP_KEY;

function App() {
  const [data, setData] = useState({ items: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://www.googleapis.com/books/v1/volumes?q=sapien&key=${key}`
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="header">
        <h1>MY PERSONAL BOOKSHELF</h1>
        <div className="search-bar">
          <input
            onChange={(event) => {
              setQuery(event.target.value);
            }}
            type="text"
            value={query}
          />
          <button
            onClick={() => {
              setSearch(query);
            }}
          >
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>

      <ul className="books">
        {data.items.map((item) => {
          return (
            <li className="book-item" key={item.id}>
              {item.volumeInfo.imageLinks && (
                <img
                  className="book__img"
                  src={item.volumeInfo.imageLinks.smallThumbnail}
                  alt=""
                />
              )}
              <div className="book__content">
                <div className="book__content">{item.volumeInfo.title}</div>
                <div className="book__content">{item.volumeInfo.authors}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
```

Since we are restricting the api call to our button being clicked we need to specify that into our useEffect function.

```javascript
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=sapien&key=${key}`
    );
    setData(result.data);
  };
  fetchData();
}, [search]);
```

Now you’re ready to browse through the API and search for books that you want to read or have read before!
