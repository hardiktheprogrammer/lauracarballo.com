import Link from "next/link";
import ms from "ms";
import Card, { MarkdownCard } from "./Card";

export default function Posts({ postList }) {
  return (
    <div>
      <main className="blog">
        {postList.map((post) => {
          const href = post.isDevTo ? post.url : `/post/${post.slug}`;
          return (
            <div key={post.slug}>
              <Link href={href}>
                {post.isDevTo ? (
                  <a>
                    <Card
                      title={post.title}
                      date={
                        ms(Date.now() - new Date(post.createdAt), {
                          long: true,
                        }) + " ago"
                      }
                      comments={post.commentsCount}
                      likes={post.reactionsCount}
                      views={post.viewsCount}
                    />
                  </a>
                ) : (
                  <a>
                    <MarkdownCard
                      title={post.title}
                      date={
                        ms(Date.now() - post.createdAt, { long: true }) + " ago"
                      }
                    />
                  </a>
                )}
              </Link>
            </div>
          );
        })}
      </main>
      <style jsx>{`
        .blog {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 10px;
          place-items: center;
          width: 100%;
          margin: 50px 0;
        }

        @media only screen and (max-width: 767px) {
          .blog {
            display: block;
            margin: 50px auto;
          }
        }
      `}</style>
    </div>
  );
}
