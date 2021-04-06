import { useState } from "react";
import { useSession, signIn } from "next-auth/client";

export default function AddComments({ onSubmit }) {
  const [commentText, setCommentText] = useState("");
  const [adding, setAdding] = useState(false);
  const [session] = useSession();

  const handleLogin = () => {
    signIn("github");
  };

  const handleAddComment = async () => {
    try {
      setAdding(true);
      await onSubmit(commentText);
      setCommentText("");
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="add-comment-box">
      {session ? (
        <>
          <div className="add__comment__box">
            <textarea
              rows="5"
              col="50"
              className="add__comment__box-textarea"
              disabled={!session}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment"
            />
            <div className="add__comment__box-row">
              <button
                className="add__comment__box-button"
                onClick={handleAddComment}
                disabled={adding}
              >
                {adding ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </>
      ) : (
        <button className="add__comment__box-button" onClick={handleLogin}>
          Login to Add Comment
        </button>
      )}
      <style jsx>{`
        .add__comment__box-textarea {
          display: block;
          outline: none;
          padding: 0px 20px;
          width: 50%;
          margin: 20px 0px;
          background-color: #ffefde;
          border: 2px solid #810000;
          box-shadow: 2px 2px 2px #810000;
          font-family: "Roboto", sans-serif;
          font-size: 16px;
          padding-top: 20px;
          padding-bottom: 0px;
        }
        .add__comment__box-textarea::placeholder {
          font-family: "Roboto", sans-serif;
          font-size: 16px;
        }
        .add__comment__box-row {
          width: 50%;
          display: flex;
          justify-content: flex-end;
        }
        .add__comment__box-button {
          border: 2px solid #810000;
          box-shadow: 2px 2px 2px #810000;
          padding: 10px;
          background-color: #810000;
          color: #fff;
        }
        @media only screen and (max-width: 767px) {
          .add__comment__box-textarea {
            width: 100%;
          }
          .add__comment__box-row {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
