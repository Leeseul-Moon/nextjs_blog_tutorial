import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // 동적 라우팅을 사용할 때, 어떤 페이지를 미리 Static으로 빌드할 지 정하는 api
  // 프로덕션에선 빌드시에 한 번 실행
  const paths = getAllPostIds();
  console.log("paths :>> ", paths);
  return {
    paths,
    fallback: false,
    // 😈 false : getStaticPaths에서 리턴하지 않은 페이지는 모두 404로 연결
    // 😈 true : 1. 먼저 사용자에게 fallback 페이지를 보여줌
    // 2. 서버에서 static하게 페이지를 생성함
    // 3. 해당 페이지를 사용자에게 보여줌
    // 4. 다음부터 해당 페이지로 접속하는 사용자에게는 static한 페이지를 보여줌
    // 😈 blocking : getStaticPaths에서 리턴하지 않은 페이지에 접속 시,
    // 사용자에게 server side rendering한 static 페이지를 보여줌
    // 다음부터 해당 페이지로 접속하는 사용자에게는 server side rendering한 static 페이지를 보여줌
    // 즉 fallback 페이지나 로딩 화면이 없다.
    // 동적 라우팅 페이지를 static 페이지로 제공해야 할 때 사용

    // 설명 잘 되어 있음 -> https://snubi.tistory.com/3
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log("postData :>> ", postData);
  return {
    props: {
      postData,
    },
  };
}
