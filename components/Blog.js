import Link from "next/link";
import ms from "ms";
import Card, { MarkdownCard } from "./Card";

export default function Posts({ postList }) {
  return (
    <div>
      <main className="blog">
        <>
          {postList.map((post) => {
            const href = post.isDevTo ? post.url : `/post/${post.slug}`;
            return (
              <div key={post.slug}>
                <Link href={href}>
                  {post.isDevTo ? (
                    <a target="_blank">
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
                    <a target="_blank">
                      <MarkdownCard
                        title={post.title}
                        date={
                          ms(Date.now() - post.createdAt, { long: true }) +
                          " ago"
                        }
                      />
                    </a>
                  )}
                </Link>
              </div>
            );
          })}
          <Link href="https://blog.logrocket.com/testing-accessibility-storybook/">
            <a target="_blank">
              <MarkdownCard
                title="Testing accessibility with Storybook"
                date={
                  ms(Date.now() - new Date(`2021 September 28`).getTime(), {
                    long: true,
                  }) + " ago"
                }
              />
            </a>
          </Link>
        </>
      </main>
      <style jsx>{`
        .blog {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 20px;
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
