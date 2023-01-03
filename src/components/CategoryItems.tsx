import React from "react";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/hash-navigation";
import { useSwiper } from "swiper/react";

const CategoryItems = () => {
  const navigationPrevRef = React.useRef<HTMLButtonElement>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement>(null);
  const [swipe, setSwipe] = React.useState<any>();

  return (
    <div className="container max-w-[1144px] mx-auto mb-[80px]">
      <div className="flex justify-between">
        <div className="text-ctgName text-[20px] leading-[24.38px] font-bold">
          ТОВАРЫ ДЛЯ ЖЕНЩИН
        </div>
        <div>
          <button onClick={() => swipe?.slidePrev()}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="40"
                y="40"
                width="40"
                height="40"
                rx="20"
                transform="rotate(-180 40 40)"
                fill="#F4F4F4"
              />
              <path
                d="M23.3 12.25L17 20.125L23.3 28"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button ref={navigationNextRef} onClick={() => swipe?.slideNext()}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#F4F4F4" />
              <path
                d="M16.7 27.75L23 19.875L16.7 12"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex relative">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode, Navigation]}
          className="[mySwiper]"
          slidesPerView={5}
          spaceBetween={5}
          onBeforeInit={(swipper) => setSwipe(swipper)}
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
        {/* <Item />
        <Item />
        <Item />
        <Item />
        <Item /> */}
      </div>
      <div className="flex justify-between items-center pt-[20px]">
        <div className="text-gc2 w-full border-[0.5px] bg-gc2" />
        <div className="">
          <button className=" bg-black2 text-white py-4 px-10 whitespace-nowrap ml-4">
            Показать все
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
