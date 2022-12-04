import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      {/* Loading third-party scripts 방법 예시  */}
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        //  A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
        strategy="lazyOnload"
        onLoad={() => console.log(`script loaded correctly, window.FB has been populated`)}
      /> */}
      <h1>First Post</h1>
      <h2>
        {/* <a> 를 사용하면, 화면이 새로고침 되며 이동. 때문에 link 사용 </a>
        If you need to link to an external page outside the Next.js app,
        just use an <a> tag without Link.

        whenever Link components appear in the browser’s viewport,
        Next.js automatically prefetches the code for the linked page in the background*/}
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}
