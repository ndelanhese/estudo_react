import Head from "next/head";
import styles from "./styles.module.scss";
import { GetStaticProps } from "next";
import { getPrismicCLient } from "../../services/prismic";
import { RichText } from "prismic-dom";

interface Post {
  slug: string;
  title: string;
  excertp: string;
  updatedAt: string;
}

interface PostProps {
  posts: Post[];
}

export default function Posts({ posts }: PostProps) {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <a key={post.slug} href="#">
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{post.excertp}</p>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicCLient();

  const response = await prismic.getAllByType("post", {
    fetch: ["post.title", "post.content"],
    pageSize: 100,
  });

 

  const posts = response.map((post) => {
    return {
      slug: post.uid,
      title: post.data.title,
      excertp:
        post.data.content.find((content) => content.type === "paragraph")
          ?.text ?? '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
