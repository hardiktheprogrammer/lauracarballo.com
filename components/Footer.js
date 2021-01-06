export default function Footer() {
  return (
    <footer>
      <div className="copyright">© 2020, Laura Carballo</div>
      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .copyright {
          margin: 20px;
          font-size: 0.7em;
        }
      `}</style>
    </footer>
  );
}
