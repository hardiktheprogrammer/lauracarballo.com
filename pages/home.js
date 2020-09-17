import Head from "../components/Head";

export default function Home() {
  return (
    <>
      <Head title="Laura Carballo" />
      <body className="page">
        <div className="nav">
          <a className="nav__link" href="#about">
            ABOUT ME
          </a>
          <a className="nav__link" href="#projects">
            PROJECTS
          </a>
          <a className="nav__link" href="/">
            MY BLOG
          </a>
        </div>

        <div className="hero">
          <div className="hero__text animation-left">
            <div className="hero__text__title">
              <h1 className="hero__text__title_bold">LAURA</h1>
              <h1 className="hero__text__title_stroke">CARBALLO</h1>
            </div>
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
        </div>
        <div className="hero__text__social-media">
          <a href="https://github.com/lauracarballo">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/lcarb14">
            <i className="fab fa-twitter"></i>
          </a>
        </div>

        <section id="about" className="page__inner page__inner_m120">
          <div className="about">
            <p>I'm a code newbie from Spain, based in Sydney, Australia.</p>

            <p>
              The openess of the tech community inspired me to take a leap in my
              career. After completing a Web Developer Bootcamp I decided to dig
              deeper into Javascript focusing mainly on React and later Next.JS
            </p>

            <p>
              The ability to use technology for good and learn while doing so
              inspired me to start my first personal project. I feel driven by
              being able to execute my ideas while developing new skills.
            </p>
          </div>
        </section>

        <section id="projects">
          <div className="projects page__inner page__inner_m120">
            <h3 className="projects__title">CURRENTLY WORKING ON ...</h3>
            <div className="projects__item">
              <div className="projects__item-name">Zapien</div>
              <div className="projects__item-description">
                <span>
                  A network that connects ethical and sustainable brands with
                  conscious influencers and creators.
                </span>
                <div className="projects__item-learn-more-container">
                  <a
                    className="projects__item-learn-more"
                    href="https://zapien.co"
                  >
                    <div className="projects__item-learn-more-text">
                      Learn more
                    </div>
                    <div className="link-arrow-container">
                      <span className="link_arrow-first">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                      <span className="link_arrow-second">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects page__inner page__inner_m120">
            <h3 className="projects__title">DEVELOPED AND DEPLOYED ...</h3>
            <div className="projects__item">
              <div className="projects__item-name">MotoAlcalá</div>
              <div className="projects__item-description">
                <span>
                  Design and develop a motorbike website built using HTML, CSS
                  and PHP
                </span>
                <div className="projects__item-learn-more-container">
                  <a
                    className="projects__item-learn-more"
                    href="https://www.motoalcala.es/"
                  >
                    <div className="projects__item-learn-more-text">
                      Learn more
                    </div>
                    <div className="link-arrow-container">
                      <span className="link_arrow-first">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                      <span className="link_arrow-second">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="back-to-top">
          <a href="#top">
            <strong>Back to top</strong>
          </a>
        </section>
        <style jsx>{`
          .page {
            margin: 0;
            padding: 0;
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

          .page__inner {
            max-width: 750px;
            margin: 0 auto;
            text-align: center;
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
            font-size: 50px;
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

          .about {
            padding: 20px 0px;
          }

          /* Projects */

          .projects__title {
            font-weight: 700;
            font-size: 22px;
            line-height: 30px;
            letter-spacing: 0.12em;
          }

          .projects__item {
            display: flex;
            margin-top: 50px;
          }

          .projects__item-name {
            width: 75px;
            font-weight: 700;
            font-size: 22px;
            text-align: left;
          }

          .projects__item-description {
            margin-left: 125px;
            text-align: left;
          }

          .projects__item-learn-more {
            display: flex;
            position: relative;
            max-width: 140px;
            font-size: 17px;
            font-weight: 700;
            margin-top: 15px;
          }

          .projects__item-learn-more:after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 2px;
            background: black;
            transform: scaleX(1);
            transform-origin: left center;
            transition: transform 0.33s linear;
          }
          .projects__item-learn-more:hover:after {
            transform: scaleX(0);
            transform-origin: right center;
          }

          .link-arrow-container {
            display: inline-block;
            position: relative;
            overflow: hidden;
            width: 15px;
          }

          .link_arrow-first {
            position: absolute;
            left: 0;
            transform: translateX(0%);
          }

          .projects__item-learn-more:hover .link_arrow-first {
            transform: translateX(200%);
            transition: transform 0.33s linear;
          }

          .link_arrow-second {
            position: absolute;
            transform: translateX(-150%);
            left: 8px;
          }

          .projects__item-learn-more:hover .link_arrow-second {
            transform: translateX(-50%);
            transition: transform 0.33s linear;
          }

          .projects__item-learn-more-text {
            text-transform: uppercase;
          }

          .back-to-top {
            text-align: center;
            margin: 60px 0;
          }

          @media only screen and (max-width: 767px) {
            .page {
              font-size: 16px;
            }

            .nav__link {
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
            }

            .about {
              text-align: left;
            }

            .page__inner {
              margin: 120px 20px;
            }

            .projects__item {
              font-size: 16px;
            }
          }
        `}</style>
      </body>
    </>
  );
}
