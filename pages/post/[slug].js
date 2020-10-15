import ms from "ms";
import { promises as fsPromises } from "fs";
import Markdown from "markdown-to-jsx";
import Youtube from "../../components/Youtube";
import Comments from "../../components/Comments";
import Nav from "../../components/Nav";

export default function Post({ post }) {
  return (
    <>
      <Nav />
      <div className="post">
        <div className="post__date">
          Published {ms(Date.now() - post.createdAt, { long: true })} ago
        </div>
        <h1 className="post__title">{post.title}</h1>
        <div className="post__content">
          <Markdown
            options={{
              overrides: {
                Youtube: { component: Youtube },
              },
            }}
          >
            {post.content}
          </Markdown>
        </div>

        <Comments slug={post.slug} />
        <style jsx>{`
          .post {
            padding: 140px 140px;
          }

          .post__date {
            font-size: 16px;
            text-align: center;
          }

          .post__title {
            color: #810000;
            font-size: 60px;
            text-align: center;
          }
          .post__content {
            padding: 30px 100px;
            text-align: justify;
            border-radius: 5px;
            box-shadow: 0px 0px 2px 1px #810000;
          }
        `}</style>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const markdownFiles = await fsPromises.readdir("data");

  const paths = markdownFiles.map((filename) => {
    const slug = filename.replace(/.md$/, "");
    return {
      params: { slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const [year, month, day, ...rest] = params.slug.split("-");
  const createdAt = new Date(`${year} ${month} ${day}`).getTime();
  const title = rest.join(" ");

  const content = await fsPromises.readFile(`data/${params.slug}.md`, "utf8");

  return {
    props: {
      post: {
        slug: params.slug,
        title,
        content,
        createdAt,
      },
    },
  };
}
