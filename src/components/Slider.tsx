import React from "react";
import { Item } from "./ItemPage/Main";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation } from "swiper";

export const Slider = () => {
  const navigationPrevRef = React.useRef<HTMLButtonElement>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement>(null);

  return (
    <div className="flex relative">
      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Navigation]}
        slidesPerView={5}
        spaceBetween={5}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          420: {
            slidesPerView: 2,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 3,
            spaceBetween: 5,
          },

          768: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
        }}
      >
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
        <SwiperSlide>
          <Item />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
