import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>MooN BLOG</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, there! I'm moon. 🙋🏻‍♀️</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export function getStaticProps() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Because getServerSideProps is called at request time,
// its parameter (context) contains request specific parameters.

// You should use getServerSideProps only if you need to pre-render a page
// whose data must be fetched at request time.
// Time to first byte (TTFB) will be slower than getStaticProps
// because the server must compute the result on every request,
// and the result cannot be cached by a CDN without extra configuration.

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }
