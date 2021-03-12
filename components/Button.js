export default function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
      <style jsx>{`
        button {
          border: 2px solid #810000;
          box-shadow: 2px 2px 2px #810000;
          padding: 10px;
          background-color: #810000;
          color: #fff;
          text-transform: uppercase;
          font-weight: 700;
          width: 100%;
          display: inline-block;
          position: relative;
          border-radius: 1px;
          overflow: hidden;
          transition: all 0.3s;
          z-index: 1;
        }

        button:hover {
          color: #fff;
        }

        button:before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 100%;
          background-color: #b25858;
          color: white;
          transition: all 0.5s;
          z-index: -1;
        }

        button:hover:before {
          width: 100%;
        }

        button:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #810000;
          color: #fff;
          z-index: -2;
        }
      `}</style>
    </button>
  );
}
