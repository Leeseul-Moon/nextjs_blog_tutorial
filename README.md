# Next.js

[Learn Next.js](https://nextjs.org/learn) 을 보며 만든 blog 입니다.

### 배운 점

- global css 적용법
- \_app, layout component 의 역할 및 사용법
- a tag VS Link

```markdown
<a> 를 사용하면, 화면이 새로고침 되며 이동. 때문에 link 사용.
If you need to link to an external page outside the Next.js app,
just use an a tag without Link.
whenever Link components appear in the browser’s viewport,
Next.js automatically prefetches the code for the linked page in the background.
```

- SSR vs SSG 그리고 Hydrate 개념 [BLOG](https://lazygay.tistory.com/60)
- `getStaticProps`, `getStaticPaths`, `getServerSideProps` 차이점

```javaScript
export async function getStaticPaths() {
    // 동적 라우팅을 사용할 때, 어떤 페이지를 미리 Static으로 빌드할 지 정하는 api
    // 빌드시에 한 번 실행(프로덕션에선)
  const paths = getAllPostIds();
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
  return {
    props: {
      postData,
    },
  };
}

//  You should use getServerSideProps only if you need to pre-render a page
 export async function getServerSideProps(context) { // 매 요청마다 실행
   return {
     props: {
       // props for your component
   },
   };
 }
```
