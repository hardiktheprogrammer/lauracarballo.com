import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Burger, { MenuBar } from "./MobileNav";

const NavLinks = ({ links }) => {
  const { pathname } = useRouter();
  return (
    <>
      {links.map((link) => {
        return (
          <li className="nav-link">
            <Link href={link.href}>
              <a className={pathname == link.href ? "nav-active" : ""}>
                {link.name}
              </a>
            </Link>
          </li>
        );
      })}
      <style jsx>{`
        .nav-link {
          display: flex;
          padding-left: 50px;
          font-size: 1.25rem;
        }
         {
          /* .nav-active {
          position: relative;
          padding-bottom: 0;
        }

        .nav-active:after {
          content: "";
          width: 100%;
          height: 3px;
          background: #810000;
          position: absolute;
          bottom: -8px;
          left: 0;
          max-width: 250px;
        } */
        }
        @media only screen and (max-width: 767px) {
          .nav-link {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
};

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav role="navigation">
      <div className="nav-primary">
        <NavLinks
          links={[
            {
              name: "Home",
              href: "/",
            },
            {
              name: "Projects",
              href: "/#projects",
            },
            {
              name: "Blog",
              href: "/#blog",
            },
            {
              name: "Contact",
              href: "/#contact",
            },
          ]}
        />
      </div>

      <div className="mobile-menu">
        <Burger open={open} setOpen={setOpen} />
        <MenuBar open={open} setOpen={setOpen} />
      </div>

      <style jsx>{`
        nav {
          margin: 40px 50px 0 50px;
          
        }
        
        .nav-primary {
          display: flex;
          justify-content: flex-end;
          font-weight: 400;
          letter-spacing: -0.1em;
          z-index: 1;
          max-width: 1320px;
          margin: 0 auto;   
        }
        .mobile-menu {
            display: none;
        }

        @media only screen and (max-width: 768px) {

          .mobile-menu {
            display: block;
          }

          .nav-primary {
            display: none;
          }
        }

        }
      `}</style>
    </nav>
  );
}
