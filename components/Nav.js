export default function Nav() {
  return (
    <nav role="navigation">
      <a className="nav__link" href="/">
        HOME
      </a>
      <a className="nav__link" href="/#projects">
        PROJECTS
      </a>
      <a className="nav__link" href="/blog">
        MY BLOG
      </a>

      <style jsx>{`
        nav {
          position: absolute;
          left: 55px;
          display: flex;
          align-content: flex-start;
          margin-top: 20px;
          font-weight: 400;
          letter-spacing: 0.1em;
          z-index: 1;
        }

        .nav__link {
          display: block;
          margin: 0px 30px;
          font-weight: 400;
          font-size: 20px;
          letter-spacing: 0.1em;
        }

        .nav__link:first-child {
          margin-left: 0;
        }

        @media only screen and (max-width: 767px) {
          .nav__link {
            font-size: 14px;
            margin: 0px 20px;
          }

          .nav {
            left: 20px;
          }
        }
      `}</style>
    </nav>
  );
}
