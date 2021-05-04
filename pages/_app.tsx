import { AppComponent } from "next/dist/next-server/lib/router/router";
import "swiper/swiper.min.css";
import Head from "next/head";

const MyApp: AppComponent = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
