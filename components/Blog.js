import Link from "next/link";
import ms from "ms";
import Card from "./Card";

export default function Posts({ postList }) {
  return (
    <div>
      <main className="blog">
        <div className="blog__row">
          {postList.map((post) => (
            <div key={post.slug}>
              <Link href="/post/[slug]" as={`/post/${post.slug}`}>
                <a>
                  <Card
                    title={post.title}
                    date={
                      ms(Date.now() - post.createdAt, { long: true }) + " ago"
                    }
                  />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <style jsx>{`
        .blog {
          display: grid;
          place-items: center;
          width: 100%;
          margin: 50px 0;
        }

        .blog__row {
          display: flex;
          flex-wrap: wrap;
        }
        @media only screen and (max-width: 767px) {
          .page__inner {
            margin: 120px 20px;
          }
        }
      `}</style>
    </div>
  );
}
