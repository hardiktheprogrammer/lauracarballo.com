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
import Project from "../components/Project";

export default function Home() {
  return (
    <>
      <Head title="Laura Carballo" />

      <header>
        <Nav />
        <div className="hero">
          <div className="hero__text animation-left">
            <h1 className="hero__text__title">
              <span className="hero__text__title_bold">Laura</span>
              <span className="hero__text__title_stroke">Carballo</span>
            </h1>
            <p className="hero__text__about">
              I’m a front end developer focusing on <strong>HTML</strong>,{" "}
              <strong>CSS</strong> and <strong>JavaScript</strong> to build
              responsive web applications. <br />
              I’m most experienced with <strong>React</strong> and the{" "}
              <strong>NextJS</strong> framework. <br />
              My current interests are <strong>Design Systems</strong>,{" "}
              <strong>Web Accessibility</strong> and{" "}
              <strong>Serverless </strong> (AWS Lambda/DynamoDB). <br />
            </p>
          </div>
          <img
            className="hero__img animation-right"
            src="/laura.jpeg"
            alt="Laura wearing a nice red hat"
          />
        </div>
        <h2 className="projects__title">Projects</h2>
      </header>
      <main>
        <section id="projects">
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
          <Project
            image="/motoalcala-screenshot.png"
            title="MotoAlcala"
            subtitle="Website built using HTML, combining the Bootstrap framework and custom CSS for styling. Back office for administration purposes using PHP and simple text-based database."
            description="I designed and created a website for a motorbike shop."
            liveLink="https://motoalcala.es/"
            codeLink="https://github.com/lauracarballo/moto-alcala"
          />
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
        <h2 className="h2__mobile">Contact</h2>
        <section id="contact">
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
          <div>
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
        </section>
      </main>
      <Footer />

      <style jsx>{`
        header {
          min-height: 650px;
          position: relative;
        }

        .hero {
          max-width: 50%;
          margin: 8vh;
          padding: 0 5vw;
        }

        .hero__text__about {
          max-width: 35vw;
          line-height: 1.5;
          margin: 20px 0;
        }

        .hero__text__title_bold {
          display: block;
          color: #810000;
        }

        .hero__text__title_stroke {
          display: block;
          -webkit-text-stroke: 2px #810000;
          color: #fee4c7;
        }

        .projects__title {
          position: absolute;
          left: 8vw;
          bottom: 0px;
        }

        .hero__img {
          position: absolute;
          right: 0;
          bottom: 0px;
          width: 50vw;
          height: auto;
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

        #contact {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 50px 0;
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
          font-size: 2rem;
          margin: 30px;
        }

        @media only screen and (max-width: 768px) {
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
          }

          .hero__text__about {
            max-width: 100%;
          }

          .projects__title {
            position: relative;
            left: 0;
            padding-left: 8vw;
          }

          .h2__mobile {
            text-align: center;
          }
          .skills-icons {
            width: 300px;
            padding: 0;
          }

          #contact {
            flex-direction: column;
          }

          .icon {
            margin: 50px 15px;
          }
        }
      `}</style>
    </>
  );
}
