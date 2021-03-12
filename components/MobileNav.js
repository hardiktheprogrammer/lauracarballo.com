export default function Burger({ open, setOpen }) {
  return (
    <button className="mobile-button" onClick={() => setOpen(!open)}>
      <div className="button-styling"></div>
      <div className="button-styling"></div>
      <div className="button-styling"></div>

      <style jsx>{`
        .mobile-button {
          position: absolute;
          top: 10%;
          right: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 2rem;
          height: 2rem;
          background: ${open ? "#810000" : "transparent"};
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
        }
        &:focus {
          outline: none;
        }
        .button-styling {
          width: 2rem;
          height: 0.25rem;
          background: ${open ? "#fff" : "#810000"};
          border-radius: 10px;
          transition: all 0.3s linear;
          position: relative;
          transform-origin: 0.5px;
        }
        .button-styling:first-child {
          transform: ${open ? "rotate(45deg)" : "rotate(0)"};
        }

        .button-styling:nth-child(2) {
          opacity: ${open ? "0" : "1"};
          transform: ${open ? "translateX(20px)" : "translateX(0)"};
        }

        .button-styling:nth-child(3) {
          transform: ${open ? "rotate(-45deg)" : "rotate(0)"};
        }
      `}</style>
    </button>
  );
}

export function MenuBar({ open, setOpen }) {
  return (
    <div className="menu">
      <a onClick={() => setOpen(!open)} className="mobile-link" href="/">
        Home
      </a>
      <a
        onClick={() => setOpen(!open)}
        className="mobile-link"
        href="/#projects"
      >
        Projects
      </a>
      <a
        onClick={() => setOpen(!open)}
        className="mobile-link"
        href="/#contact"
      >
        Contact
      </a>
      <style jsx>{`
        .menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          width: 100%;
          text-align: center;
          padding: 2rem;
          position: fixed;
          background-color: #810000;
          top: 0;
          right: 0;
          z-index: 9;
          transition: transform 0.3s ease-in-out;
          transform: ${open ? "translateX(0%)" : "translateX(100%)"};
        }

        .mobile-link {
          font-size: 2rem;
          text-transform: uppercase;
          padding: 2rem 0;
          font-weight: bold;
          letter-spacing: 0.5rem;
          text-decoration: none;
          transition: color 0.3s linear;
          color: #fff;
        }
      `}</style>
    </div>
  );
}
