import "../styles/global.css";
// global css 파일은 반드시 _app 에 있어야 한다.
// _app 컴포넌트는 모든 컴포넌트가 시작되는 시점이다.

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
