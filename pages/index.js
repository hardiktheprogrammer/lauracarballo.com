import Posts from "../components/Blog";
import axios from "axios";
import { promises as fsPromises } from "fs";
import path from "path";
import Footer from "../components/Footer";
import Form, { Input, TextArea } from "../components/Form";
import Head from "../components/Head";
import Nav from "../components/Header";
import Icons, {
  ReactIcon,
  JSIcon,
  NodeJSIcon,
  GitIcon,
  HTMLIcon,
  CSSIcon,
  AWSLambdaIcon,
  AccessibilityIcon,
} from "../components/Icons";
import MainLink from "../components/MainLink";
import Project from "../components/Project";

export default function Home({ postList }) {
  return (
    <>
      <Head title="Laura Carballo" />

      <Nav />

      <header>
        <div className="hero">
          <div className="hero__text animation-left">
            <h1 className="hero__text__title">
              <span className="hero__text__title_small">Hello, I'm</span>
              <span className="hero__text__title_bold">Laura</span>
              <span className="hero__text__title_bold">Carballo</span>
            </h1>
            <p className="hero__text__about">
              <span className="hero__text__about__title">
                Front-end Developer
              </span>
            </p>
            <MainLink href="/about">Get to know me</MainLink>
          </div>
          <img
            className="hero__img animation-right"
            src="/laura.jpeg"
            alt="Laura wearing a nice red hat"
          />
        </div>

        <div className="projects__animation">
          <h2 className="projects__title">Projects</h2>
          <div className="projects__svg">
            {/* <svg
              width="102"
              height="31"
              viewBox="0 0 102 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M96.6464 30.3536C96.8417 30.5488 97.1583 30.5488 97.3536 30.3536L100.536 27.1716C100.731 26.9763 100.731 26.6597 100.536 26.4645C100.34 26.2692 100.024 26.2692 99.8284 26.4645L97 29.2929L94.1716 26.4645C93.9763 26.2692 93.6597 26.2692 93.4645 26.4645C93.2692 26.6597 93.2692 26.9763 93.4645 27.1716L96.6464 30.3536ZM96.5 17V30H97.5V17H96.5Z"
                fill="#810000"
              />
              <path
                d="M84.9999 5.49999C98.1188 5.38114 97.1259 6.35697 96.9998 16.9999"
                stroke="#810000"
              />
              <line x1="85" y1="5.5" y2="5.5" stroke="#810000" />
            </svg> */}
          </div>
        </div>
      </header>
      <main>
        <section id="projects">
          <div className="row">
            <Project
              image="/bookshelf-readme.png"
              title="My Bookshelf"
              subtitle="Full Stack App created with React, DynamoDB and AWS lambda to build your own personal bookshelf"
              description="I started this app to keep track of the books I had read and wished to read throughout the year and I later added a login and sign up page to allow others to build their own bookshelf too."
              codeLink="https://github.com/lauracarballo/books-api"
              liveLink="http://books.lauracarballo.com/"
            />
            <Project
              image="/zapien-screenshot.png"
              title="Zapien"
              subtitle="Full Stak App built with the NextJS framework and serverless backend using NodeJS in AWS Lambda."
              description="A network that connects ethical and sustainable brands with conscious influencers and creators."
              liveLink="https://zapien.co/"
              codeLink=""
            />
          </div>
          <div className="row">
            <Project
              image="/motoalcala-screenshot.png"
              title="MotoAlcala"
              subtitle="Website built using HTML, combining the Bootstrap framework and custom CSS for styling. Back office for administration purposes using PHP and simple text-based database."
              description="I designed and created a website for a motorbike shop."
              liveLink="https://motoalcala.es/"
              codeLink="https://github.com/lauracarballo/moto-alcala"
            />
            <Project
              image="/interactive-pricing-screenshot.png"
              title="FEM - Interactive Pricing Page"
              subtitle="Component built using React and Styled Components"
              description="I built this interactive pricing component following the Frontend Mentor design and styling guidances. The main challenge was to use the slider and toggle to see prices for different page view numbers."
              liveLink="https://interactive-pricing-component-fem.netlify.app/"
              codeLink="https://github.com/lauracarballo/crowdfunding-product-page-fem"
            />
          </div>
          <div className="row">
            <Project
              image="/crowdfunding-product-page-screenshot.png"
              title="FEM - Crowdfunding Product Page"
              subtitle="App built using React and Styled Components. Backend built using Express.js"
              description="I built a crowdfunding product page following the Frontend Mentor design and styling guidances. The user will be able to see an update in the progress bar and total money raised based on their pledge total after confirming a pledge."
              liveLink="https://crowdfunding-product-page-fem.netlify.app/"
              codeLink="https://github.com/lauracarballo/crowdfunding-product-page-fem"
            />
            <Project
              image="/chat-app-screenshot.png"
              title="FEM - Chat App"
              subtitle="App built using React and Styled Components."
              description="I tested my CSS skills building a mobile component for a chat app following the Frontend Mentor design and styling guidances."
              liveLink="https://chat-app-fem.netlify.app/"
              codeLink="https://github.com/lauracarballo/chat-app-fem"
            />
          </div>
        </section>
        <section id="blog">
          <h2 className="h2__mobile">My Blog</h2>
          <Posts postList={postList} />
        </section>
        <section id="skills">
          <h2 className="h2__mobile">Skills</h2>
          <div className="skills-icons">
            <Icons
              icons={[
                {
                  name: "JavaScript",
                  svg: <JSIcon />,
                },
                {
                  name: "HTML",
                  svg: <HTMLIcon />,
                },
                {
                  name: "CSS",
                  svg: <CSSIcon />,
                },
                {
                  name: "Git",
                  svg: <GitIcon />,
                },
                {
                  name: "React",
                  svg: <ReactIcon />,
                },
                {
                  name: "NodeJS",
                  svg: <NodeJSIcon />,
                },
                {
                  name: "Accessibility",
                  svg: <AccessibilityIcon />,
                },
                {
                  name: "AWS Lambda",
                  svg: <AWSLambdaIcon />,
                },
              ]}
            />
          </div>
        </section>

        <section id="contact">
          <h2 className="h2__mobile">Contact</h2>
          <div className="contact__container">
            <Form
              onSubmit={(event) => {
                const { name, email, message } = event.target;
                return {
                  name: name.value,
                  email: email.value,
                  content: message.value,
                };
              }}
            >
              <Input name="name" label="Name" />
              <Input name="email" type="email" label="Email" />
              <TextArea name="message" label="Message" />
            </Form>
            <div className="social-media">
              <a
                href="https://github.com/lauracarballo"
                aria-label="Go to Laura's Github Profile"
              >
                <i className="icon fab fa-github"></i>
              </a>
              <a
                href="https://twitter.com/lcarb14"
                aria-label="Go to Laura's Twitter Profile"
              >
                <i className="icon fab fa-twitter"></i>
              </a>
              <a
                href="mailto:laura.carballo14@gmail.com"
                aria-label="Write an email to Laura"
              >
                <i className="icon fa fa-envelope" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/laura-carballo-arjona-8b6808114/"
                aria-label="Go to Laura's Linkedin Profile"
              >
                <i className="icon fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        header {
          height: 650px;
          position: relative;
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
        }

        .hero {
          padding: 0 70px;
        }

        .hero__text__greeting {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }

        .hero__text__about {
          max-width: 35vw;
          line-height: 1.5;
          font-size: 22px;
          color: #000;
        }

        .hero__text__about__title {
          font-size: 35px;
          color: #810000;
        }

        .hero__text__title_small {
          font-size: 2.8rem;
          font-weight: 400;
          letter-spacing: 0.05em;
        }
        .hero__text__title_bold {
          display: block;
          color: #810000;
        }

        .hero__text__title_stroke {
          display: block;
          -webkit-text-stroke: 2px #810000;
          color: #ffefde;
        }

        #projects {
          padding: 0px 50px;
        }

        .row {
          display: flex;
          flex-direction: row;
          width: 100%;
          margin: 0 0 100px 0;
        }

        .projects__animation {
          position: absolute;
          left: 60px;
          bottom: -15px;
        }
        .projects__svg {
          position: absolute;
          bottom: 35px;
        }

        .hero__img {
          position: absolute;
          right: -10px;
          bottom: 0px;
          width: 50%;
          height: auto;
        }

        #skills {
          padding: 0 70px;
        }

        .skills-icons {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
          width: 600px;
          margin: 40px auto;
        }
        #blog {
          padding: 0 70px;
        }

        #contact {
          padding: 0 70px;
        }

        .contact__container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

         {
          /* @keyframes slidein-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0%);
          }
        }

        .animation-right {
          animation: 1.5s ease 0.5s forwards slidein-right;
          transform: translateX(100%);
        }

        @keyframes slidein-left {
          from {
            transform: translateY(100vh);
          }
          to {
            transform: translateY(0%);
          }
        }

        .animation-left {
          animation: 1.5s ease 0.5s forwards slidein-left;
          transform: translateY(100vh);
        } */
        }

        .icon {
          font-size: 1.2rem;
          margin: 0 20px;
        }

        .load {
          width: 15%;
          margin: 0 auto;
        }

        .social-media {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }

        @media only screen and (max-width: 768px) {
          header {
            height: 820px;
          }
          .hero {
            max-width: 100%;
            margin: 5vh 0;
            padding: 0 7vw;
          }

          .hero__img {
            position: relative;
            width: 100%;
            height: 350px;
            object-fit: cover;
            right: 2px;
            top: 30px;
          }

          .hero__text__about {
            max-width: 100%;
          }

          #projects {
            padding: 0;
          }

          #blog {
            padding: 0;
          }

          .projects__animation {
            position: static;
            text-align: center;
          }
          .projects__title {
            position: static;
            text-align: center;
          }

          .row {
            flex-direction: column;
            margin: 0 0 20px 0;
          }

          .h2__mobile {
            text-align: center;
          }
          .skills-icons {
            width: 300px;
            padding: 0;
          }

          #contact {
            padding: 0;
          }

          #skills {
            padding: 0;
          }

          .contact__container {
            flex-direction: column;
          }

          .social-media {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            margin: 30px 0;
          }
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const markdownDirectory = path.join(process.cwd(), "data");

  const markdownFiles = await fsPromises.readdir(markdownDirectory);

  const markdownPostList = markdownFiles.map((filename) => {
    const slug = filename.replace(/.md$/, "");
    const [year, month, date, ...rest] = slug.split("-");
    const createdAt = new Date(`${year} ${month} ${date}`).getTime();
    const title = rest.join(" ");

    return {
      slug,
      createdAt,
      title,
    };
  });

  const devToPostList = await getDevToPosts();

  return {
    props: {
      postList: [...markdownPostList, ...devToPostList],
    },
    revalidate: 1800,
  };
}

async function getDevToPosts() {
  const { data } = await axios.get("https://dev.to/api/articles/me", {
    headers: {
      "Api-Key": process.env.API_KEY,
    },
  });

  return data.map((post) => {
    const {
      title,
      canonical_url,
      public_reactions_count,
      page_views_count,
      published_at,
      comments_count,
    } = post;
    return {
      isDevTo: true,
      title,
      url: canonical_url,
      createdAt: published_at,
      reactionsCount: public_reactions_count,
      viewsCount: page_views_count,
      commentsCount: comments_count,
    };
  });
}
