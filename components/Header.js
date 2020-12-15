import { useSession, signIn, signOut } from "next-auth/client";
import Nav from "./Nav";

export default function Header({ active }) {
  const [session] = useSession();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn("github");
  };

  const handleLogout = (event) => {
    event.preventDefault();
    signOut();
  };

  return (
    <header role="banner">
      <Nav />
      <div className={active ? "user__login" : "displayNone"}>
        {session ? (
          <>
            <img src={session.user.github.avatar} className="user__img" />
            <a
              href="#"
              onClick={handleLogout}
              className="user__log user__log-logout"
            >
              Logout
            </a>
          </>
        ) : (
          <a
            href="#"
            onClick={handleLogin}
            className="user__log user__log-login"
          >
            Login
          </a>
        )}
      </div>
      <style jsx>{`
        header {
          display: block;
          text-align: right;
        }
        .user__login {
          display: flex;
          justify-content: flex-end;
        }
        .user__log {
          display: flex;
          align-items: center;
          padding: 15px 10px;
        }

        .user__img {
          border-radius: 50px;
          height: 33px;
          width: 33px;
        }
        @media only screen and (max-width: 767px) {
          .user__log {
            font-size: 14px;
            padding: 10px 20px;
          }

          .user__log-logout {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
