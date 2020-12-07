import Markdown from "markdown-to-jsx";
import ms from "ms";
import useSWR from "swr";
import AddComments from "./AddComments";
import classNames from "classnames";
import { useSession } from "next-auth/client";

async function swrFetcher(path) {
  const res = await fetch(path);
  return res.json();
}

export default function Comments({ slug }) {
  const [session] = useSession();
  const { data: comments, mutate } = useSWR(
    `/api/comments?slug=${slug}`,
    swrFetcher
  );

  const createComment = async (fakeComment) => {
    const fetchRes = await fetch(`/api/comments?slug=${slug}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: fakeComment.content }),
    });

    if (!fetchRes.ok) {
      throw new Error(await fetchRes.text());
    }

    const addedComment = await fetchRes.json();

    mutate((currentComments) => {
      const newComments = [];
      for (const c of currentComments) {
        if (c.id === fakeComment.id) {
          newComments.push(addedComment);
        } else {
          newComments.push(c);
        }
      }

      return newComments;
    }, false);
  };

  const handleAddComment = async (content) => {
    const fakeComment = {
      id: Math.random(),
      userId: session.user.id,
      name: session.user.github.name,
      avatar: session.user.github.avatar,
      content,
      createdAt: Date.now(),
      clientOnly: true,
    };

    mutate([...comments, fakeComment], false);

    createComment(fakeComment).catch((err) => {
      mutate((currentComments) => {
        const newComments = [];
        for (const c of currentComments) {
          if (c.id === fakeComment.id) {
            newComments.push({
              ...fakeComment,
              error: err.message,
            });
          } else {
            newComments.push(c);
          }
        }

        return newComments;
      }, false);
    });
  };

  return (
    <div className="comments-container">
      <b className="comments-title">COMMENTS</b>
      {comments && comments.length > 0 ? (
        <div className="comments">
          {comments.map((c) => (
            <div
              key={c.id}
              className={classNames({
                comment: true,
                "client-only": c.clientOnly,
                error: c.error,
              })}
            >
              <div className="comment__author">
                <img
                  className="comment__author-img"
                  src={c.avatar}
                  title={c.name}
                />
                <div className="comment__author-info">
                  {c.name} ({ms(Date.now() - c.createdAt)} ago)
                </div>
              </div>
              <div className="comment__content">
                <Markdown>{c.error || c.content || ""}</Markdown>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="comment">
          <div className="no-comment-content">No comments.</div>
        </div>
      )}
      <AddComments onSubmit={handleAddComment} />
      <style jsx>{`
        .comments-container {
          margin-top: 50px;
        }

        .comment {
          display: block;
          padding: 0px 20px;
          width: 50%;
          margin: 20px 0px;
          background-color: #ffd5a5;
          border: 2px solid #810000;
        }
        .comments-title {
          color: #810000;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.05em;
        }
        .comment__author {
          display: flex;
          align-items: center;
          font-size: 16px;
          padding: 10px 0px;
        }
        .comment__author-img {
          border-radius: 50px;
          height: 33px;
          width: 33px;
          margin: 1.5% 1.5% 1.5% 1.5%;
        }
        .comment__content {
          margin: 1.5% 1% 5% 1.5%;
        }

        .no-comment-content {
          padding: 10px 0px;
        }

        .error {
          background-color: #ea907a;
          color: #900d0d;
        }
        @media only screen and (max-width: 767px) {
          .comment {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
