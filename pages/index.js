import Head from "../components/Head";
import Header from "../components/Header";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head title="Laura Carballo" />
      <body className="page">
        <Header />

        <main role="main">
          <section className="hero">
            <div className="hero__text animation-left">
              <h1 className="hero__text__title">
                <div className="hero__text__title_bold">LAURA</div>
                <div className="hero__text__title_stroke">CARBALLO</div>
              </h1>
              <div className="hero__text__undertitle">
                <h2 className="hero__text_weight400">
                  Business and Law graduate
                </h2>
                <h2>Web Developer</h2>
              </div>
            </div>
            <img
              className="hero__img animation-right"
              src="/laura.jpeg"
              alt="Laura wearing a nice red hat"
            />
          </section>

          <section id="socialmedia" className="hero__text__social-media">
            <a
              href="https://github.com/lauracarballo"
              aria-label="Go to Laura's Github Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://twitter.com/lcarb14"
              aria-label="Go to Laura's Twitter Profile"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </section>

          <section id="aboutme" className="page__inner page__inner_m120">
            <h2 className="visually-hidden">About Me</h2>
            <p>
              I’m a front end developer focusing on HTML, CSS and JavaScript to
              build responsive web applications.
            </p>

            <p>I’m most experienced with React and the NextJS framework.</p>

            <p>
              My current interests are Design Systems, Web Accessibility and
              Serverless (AWS Lambda/DynamoDB).
            </p>
          </section>

          <section id="projects">
            <div className="projects page__inner page__inner_m120">
              <h3 className="projects__title">CURRENTLY WORKING ON ...</h3>

              <Projects
                name="Zapien"
                description="A network that connects ethical and sustainable brands with
              conscious influencers and creators."
                website="https://zapien.co"
              />
            </div>
            <div className="projects page__inner page__inner_m120">
              <h3 className="projects__title">DEVELOPED AND DEPLOYED ...</h3>
              <Projects
                name="MotoAlcalá"
                description="Design and develop a motorbike website built using HTML, CSS and
              PHP"
                website="https://www.motoalcala.es/"
              />
              <Projects
                name="My Personal Bookshelf"
                description="Full Stack App created with React, DynamoDB and AWS lambda to build your own personal bookshelf."
                website="https://books.lauracarballo.com/"
              />
            </div>
          </section>

          <section className="back-to-top">
            <a href="#top">
              <strong>Back to top</strong>
            </a>
          </section>
        </main>
        <style jsx>{`
          .page {
            margin: 0;
            padding: 0;
            width: 100%;
            box-sizing: border-box;
            font-family: "Roboto", sans-serif;
            font-weight: 400;
            font-size: 20px;
            letter-spacing: 0.05em;
            color: #000;
            background-color: #ffd5a5;
            scroll-behavior: smooth;
          }

          a {
            color: #000;
            text-decoration: none;
          }

          .page__inner_m120 {
            margin-top: 120px;
            margin-bottom: 120px;
          }

          .nav {
            position: absolute;
            left: 55px;
            display: flex;
            align-content: flex-start;
            margin-top: 20px;
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.1em;
            z-index: 1;
          }

          .nav__link {
            display: block;
            margin: 0px 30px;
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.1em;
          }

          .nav__link:first-child {
            margin-left: 0;
          }
          /* Hero */

          .hero {
            display: grid;
            grid-template-columns: 50% 50%;
            height: 100vh;
            align-items: center;
          }

          .hero__text {
            grid-column: 1;
            padding-right: 20px;
            padding-left: 55px;
            text-align: right;
          }

          .hero__text__title {
            font-weight: 700;
            font-size: 7rem;
            letter-spacing: 0.05em;
          }

          .hero__text__title_bold {
            color: #810000;
          }

          .hero__text__title_stroke {
            -webkit-text-stroke: 2px #810000;
            color: #ffd5a5;
          }

          .hero__text__undertitle {
            font-weight: 700;
            font-size: 20px;
            line-height: 30px;
          }

          .hero__text_weight400 {
            font-weight: 400;
          }

          .hero__text__social-media {
            position: absolute;
            bottom: 20px;
            left: 50px;
          }

          .hero__img {
            grid-column: 2;
            max-width: 100%;
            width: 100%;
            height: 100vh;
            display: block;
            object-fit: cover;
          }

          @keyframes slidein-right {
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
          }

          /* About */

          #aboutme {
            padding: 20px 0px;
          }

          .projects__title {
            font-weight: 700;
            font-size: 2rem;
            line-height: 30px;
            letter-spacing: 0.12em;
          }

          .back-to-top {
            text-align: center;
            margin: 60px 0;
          }

          @media only screen and (max-width: 767px) {
            .page {
              font-size: 16px;
            }

            .hero {
              display: flex;
              align-items: center;
              flex-wrap: wrap-reverse;
              height: auto;
            }
            .hero__text {
              margin-top: 35px;
              padding-right: 20px;
              padding-left: 35px;
              text-align: left;
            }

            .hero__text__title {
              font-size: 25px;
            }

            .hero__text__undertitle {
              font-size: 15px;
            }

            .hero__img {
              width: 100%;
              height: 55vh;
              display: block;
              object-fit: cover;
            }

            .hero__text__social-media {
              position: absolute;
              left: 37px;
              bottom: -100px;
            }

            .about {
              text-align: left;
            }

            .page__inner {
              margin: 120px 20px;
            }
          }
        `}</style>
      </body>
    </>
  );
}
