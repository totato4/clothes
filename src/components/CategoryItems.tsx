import React from "react";
import { Item, ItemPageLoader } from "../components/ItemPage/Main";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/hash-navigation";
import { Link } from "react-router-dom";
import axios from "axios";
import { Status } from "../RTK/asyncThunk/types";
import { IProduct } from "../RTK/cart/types";
import { useMatchMedia } from "./../hooks";
import ResetBtn from "./ItemPage/Main/ResetBtn";

type props = {
  human: string;
};

const humanArray = [
  { type: "woman", name: "ЖЕНЩИН" },
  { type: "man", name: "МУЖЧИН" },
  { type: "kid", name: "ДЕТЕЙ" },
];

const CategoryItems: React.FC<props> = ({ human }) => {
  const { isTablet, isDesktop, isMobile }: any = useMatchMedia();
  const [items, setItems] = React.useState<IProduct[] | []>([]);
  const [status, setStatus] = React.useState<Status>(Status.LOADING);

  const navigationPrevRef = React.useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement | null>(null);
  const [swipe, setSwipe] = React.useState<SwiperCore | undefined>();

  let currentHuman = { type: "", name: "" };
  const currentURL = `http://localhost:3001/products?humanCategory=${human}&limit=12`;
  humanArray.forEach((elem) => {
    if (elem.type == human) {
      currentHuman = elem;
    }
  });

  React.useEffect(() => {
    setStatus(Status.LOADING);

    axios
      .get(currentURL)
      .then((response) => {
        setItems(response.data.products);
        setStatus(Status.SUCCESS);
      })
      .catch((error) => {
        setStatus(Status.ERROR);
        console.log(error);
      });

    return () => {};
  }, [currentHuman]);

  const skeleton = [...new Array(6)].map((_, index) => (
    <SwiperSlide key={index}>
      <ItemPageLoader key={index} />
    </SwiperSlide>
  ));
  const myItems = items.map((obj, i) => (
    <SwiperSlide key={obj.id}>
      <Item item={obj} />
    </SwiperSlide>
  ));

  // Array(8)
  // .fill(0)
  // .map((_, index) => <LoadingBlock key={index} />);

  const content = items.map((obj: IProduct, index: number) => {
    if (status === "loading") {
      [...new Array(20)].map((_, index) => (
        <SwiperSlide key={obj.id}>
          <ItemPageLoader key={index} />
        </SwiperSlide>
      ));
    } else if (status === "success") {
      return (
        <SwiperSlide key={obj.id}>
          <Item item={obj} />
        </SwiperSlide>
      );
    } else if (status === "error") {
      return <div>Не удалось загрузить товары...</div>;
    }
  });

  return (
    <div className="container max-w-[1144px] mx-auto mt-[36px] mb-[80px]">
      <div className="flex justify-between mb-[10px] desktop:h-[40px]">
        <div
          className={`${
            isMobile && "mx-auto"
          } text-ctgName text-[20px] leading-[24.38px] font-bold desktop:my-auto`}
        >
          ТОВАРЫ ДЛЯ {currentHuman.name}
        </div>
        <div className="desktop:h-[40px] flex justify-between items-start desktop:w-[94px] desktop:gap-x-0 gap-x-2">
          {!isMobile && (
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
          )}
          {!isMobile && (
            <button onClick={() => swipe?.slideNext()}>
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
          )}
        </div>
      </div>
      <div className="relative ">
        {isMobile && status !== "error" && (
          <div className="absolute left-0 top-[50%] translate-y-[-50%] z-10">
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
          </div>
        )}
        <div className="flex  desktop:w-[100vw] w-[95vw] max-w-[1144px] sm:px-0 px-[20px] ">
          <Swiper
            grabCursor={true}
            slidesPerView={5}
            spaceBetween={5}
            onBeforeInit={(swipper) => setSwipe(swipper)}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              350: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              420: {
                slidesPerView: 2,
                spaceBetween: 5,
              },

              500: {
                slidesPerView: 3,
                spaceBetween: 5,
              },

              768: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1182: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
          >
            {status == "loading" && skeleton}
            {status == "success" && myItems}
          </Swiper>
          {status == "error" && (
            <div className="mr-auto">
              <ResetBtn />
            </div>
          )}
        </div>
        {isMobile && status !== "error" && (
          <div className="absolute right-[0] top-[50%] translate-y-[-50%] z-10">
            <button onClick={() => swipe?.slideNext()}>
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
        )}
      </div>

      <div
        className={`flex gap-x-[19px] ${
          isMobile ? "justify-center" : "justify-between"
        } items-center pt-[18.5px]  `}
      >
        <div className=" w-full border-[0.5px] bg-gc2" />
        {/* onClick scroll to top при переходе на другую страницу */}
        <Link to={`/Category?human=${human}`}>
          <button
            className=" bg-black2 text-gc2 text-[14px] font-montserat font-semibold w-[224px] h-[50px] text-center whitespace-nowrap "
            onClick={() => window.scroll(0, 0)}
          >
            Показать все
          </button>
        </Link>
        {isMobile && <div className="text-gc2 w-full border-[0.5px] bg-gc2" />}
      </div>
    </div>
  );
};

export default CategoryItems;
