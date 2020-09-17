import { useSession, signIn, signOut } from "next-auth/client";

export default function Header() {
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
    <div className="header">
      <div className="user__login">
        {session ? (
          <>
            <img src={session.user.github.avatar} className="user__img" />
            <a href="#" onClick={handleLogout} className="user__log">
              Logout
            </a>
          </>
        ) : (
          <a href="#" onClick={handleLogin} className="user__log">
            Login
          </a>
        )}
      </div>
      <style jsx>{`
        .header {
          display: block;
          text-align: right;
          padding: 10px;
        }
        .user__login {
          display: flex;
          justify-content: flex-end;
        }
        .user__log {
          display: flex;
          align-items: center;
          padding: 0px 10px;
        }

        .user__img {
          border-radius: 50px;
          height: 33px;
          width: 33px;
        }
      `}</style>
    </div>
  );
}
