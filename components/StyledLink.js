import Link from "next/link";

export default function StyledLink({ href, children }) {
  return (
    <>
      <Link href={href}>
        <a className="link">{children}</a>
      </Link>

      <style jsx>{`
        .link {
          border: 2px solid #810000;
          box-shadow: 2px 2px 2px #810000;
          padding: 10px;
          background-color: #810000;
          color: #fff;
          margin-right: 20px;
          text-transform: uppercase;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}
