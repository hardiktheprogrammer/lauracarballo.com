import Head from "next/head";
import Link from "next/link";
import ms from "ms";
import { promises as fsPromises } from "fs";
import Card from "../components/Card";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Posts({ postList }) {
  return (
    <div>
      <Head>
        <title>Laura - Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <Header />

      <main className="blog">
        <h1 className="blog__title">
          WELCOME TO MY <span className="blog__title-bold">BLOG</span>
        </h1>
        <div className="blog__post-list">
          {postList.map((post) => (
            <div key={post.slug} className="blog__post-list__post-link">
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
          margin-top: 50px;
        }

        .blog__title {
          font-weight: 700;
          font-size: 60px;
          letter-spacing: 0.05em;
          -webkit-text-stroke: 2px #810000;
          color: #ffd5a5;
        }
        .blog__title-bold {
          color: #810000;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  const markdownFiles = await fsPromises.readdir("data");

  const postList = markdownFiles.map((filename) => {
    const slug = filename.replace(/.md$/, "");
    const [year, month, date, ...rest] = slug.split("-");
    const createdAt = new Date(`${year} ${month} ${date}`).getTime();
    const title = rest.join(" ");

    return {
      slug,
      createdAt,
      title,
    };
  });

  return {
    props: {
      postList,
    },
  };
}
