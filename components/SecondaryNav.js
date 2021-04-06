import { useState } from "react";
import Burger, { MenuBar } from "../components/MobileNav";

export default function SecondaryNav() {
  const [open, setOpen] = useState(false);
  return (
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
      <style jsx>{`
        nav {
          position: relative;
          display: flex;
          justify-content: space-between;
        }
        .mobile-menu {
          display: block;
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
    </nav>
  );
}
