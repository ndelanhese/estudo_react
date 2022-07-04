import { GetStaticProps, GetStaticPaths } from "next";
import { RichText } from "prismic-dom";
import Head from "next/head";
import { getPrismicCLient } from "../../../services/prismic";
import styles from "../post.module.scss";
import Link from "../../../../node_modules/next/link";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "../../../../node_modules/next/router";

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    contentBody: string;
    updatedAt: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>{post.title} | ignews</title>
      </Head>
      <main className={styles.postContainer}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <div className={styles.continueReading}>
            Wanna continue Reading?
            <Link href="/">
              <a>Subscribe now 🤗</a>
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicCLient();

  const response = await prismic.getByUID("post", String(slug));

  const post = {
    slug,
    title: response.data.title,
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };
  return {
    props: {
      post,
    },
    redirect: 60 * 30, // 30 minutes
  };
};
