import type { AppProps } from "next/app";

//글로벌 css 적용가능
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
