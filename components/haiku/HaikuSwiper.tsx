import { Swiper, SwiperSlide } from "swiper/react";

import HaikuLayout from "../layout/HaikuLayout";

type Props = {
  haiku: string;
};

const HaikuSwiper: React.VFC<Props> = ({ haiku }) => {
  return (
    <Swiper
      dir="rtl"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {haiku.split("\n").map((line, i) => (
        <SwiperSlide
          dir="ltr"
          key={line}
          virtualIndex={i}
          style={{
            display: "flex",
            width: "100%",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HaikuLayout>{line}</HaikuLayout>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HaikuSwiper;
