import { useState } from "react";
import Head from "../components/Head";
import Burger, { MenuBar } from "../components/MobileNav";
import MainLink from "../components/MainLink";
import Link from "next/link";

export default function About() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Head title="Laura Carballo" />
      <div className="wrapper">
        <nav>
          <div className="logo">
            <div className="hero__text__title">
              <span className="hero__text__title_bold">Laura</span>
              <span className="hero__text__title_bold">Carballo</span>
            </div>
            <span className="hero__text__subtitle">Front end Developer</span>
          </div>
          <div className="mobile-menu">
            <Burger open={open} setOpen={setOpen} />
            <MenuBar open={open} setOpen={setOpen} />
          </div>
        </nav>
        <div className="content">
          <div className="content-p">
            <p>
              Hi, i'm <strong>Laura</strong>, a front end developer at{" "}
              <a href="https://simplywall.st/" target="_blank">
                <strong>Simply Wall St</strong>
              </a>
              .
            </p>
            <p>
              My interest for web development began over two years ago when
              joining a bootcamp and learning{" "}
              <strong>HTML, CSS, and JavaScript</strong>. I fell in love with
              the endless creativity and autonomy that comes with writing
              software.
            </p>
            <p>
              Most of my projects are crafted in{" "}
              <strong>React and the NextJS</strong> framework. I also have some
              experience working with <strong>NodeJS</strong>, and have recently
              developed an interest for serverless technologies, namely{" "}
              <strong>AWS Lambda and DynamoDB</strong>. I also have a keen
              interest in developing <strong>Design Systems</strong>, which is a
              great way to focus on user experience, accessibility, and
              inclusivity.
            </p>
          </div>

          <MainLink href="/">Go back</MainLink>
        </div>

        <style jsx>{`
          .wrapper {
            width: 60%;
            margin: 30px auto;
          }

          nav {
            position: relative;
            display: flex;
            justify-content: space-between;
          }
          .mobile-menu {
            display: block;
          }

          .content {
            margin: 100px 0;
          }

          .content-p {
            font-size: 18px;
            line-height: 38px;
            letter-spacing: 0.6px;
          }
          .hero__text__title {
            display: flex;
            font-size: 40px;
            letter-spacing: -0.1em;
          }

          .hero__text__title_bold {
            display: block;
            color: #810000;
            margin-right: 10px;
          }

          .hero__text__title_stroke {
            display: block;
            -webkit-text-stroke: 2px #810000;
            color: #fff;
          }

          .hero__text__subtitle {
            margin-left: 2px;
            letter-spacing: 0em;
          }
          @media only screen and (max-width: 768px) {
            .wrapper {
              width: 85%;
              padding: 45px 0;
            }
          }
        `}</style>
      </div>
    </>
  );
}
