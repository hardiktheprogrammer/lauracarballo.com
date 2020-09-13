import ms from "ms";
import { promises as fsPromises } from "fs";
import Markdown from "markdown-to-jsx";
import Youtube from "../../components/Youtube";

export default function Post({ post }) {
  return (
    <div className="post">
      <div className="post__date">
        Published {ms(Date.now() - post.createdAt, { long: true })} ago
      </div>
      <h1>{post.title}</h1>
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
      <style jsx>{`
        .post {
          padding: 80px 80px;
        }
      `}</style>
    </div>
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
