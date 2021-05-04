import { AppComponent } from "next/dist/next-server/lib/router/router";
import "swiper/swiper.min.css";

const MyApp: AppComponent = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
