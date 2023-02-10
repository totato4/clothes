import React from "react";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/hash-navigation";
import { Link } from "react-router-dom";
import axios from "axios";
import { Iitem } from "../RTK/asyncThunk/types";
import { useMatchMedia } from "./../hooks";

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

  const navigationPrevRef = React.useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = React.useRef<HTMLButtonElement | null>(null);
  const [swipe, setSwipe] = React.useState<SwiperCore | undefined>();

  //

  let currentHuman = { type: "", name: "" };
  const currentURL = `http://localhost:3001/items?humanCategory=${human}&_limit=12`;
  humanArray.forEach((elem) => {
    if (elem.type == human) {
      currentHuman = elem;
    }
  });

  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const controller = new AbortController();

  const ItemsRequest = () => {
    axios
      .get(currentURL, {
        signal: controller.signal,
      })
      .then((response) => {
        setItems(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  React.useEffect(() => {
    let mounted = true;
    ItemsRequest();
    return () => {
      mounted = false;
    };
  }, [currentHuman]);

  return (
    <div className="container max-w-[1144px] mx-auto mb-[80px]">
      <div className="flex justify-between">
        <div
          className={`${
            isMobile && "mx-auto"
          } text-ctgName text-[20px] leading-[24.38px] font-bold mb-[20px]`}
        >
          ТОВАРЫ ДЛЯ {currentHuman.name}
        </div>
        <div>
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
        {isMobile && (
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
        <div className="flex  w-[95vw] max-w-[1144px] sm:px-0 px-[20px] ">
          {loading && (
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
              {items.map((obj: Iitem, i: number) => (
                <SwiperSlide key={obj.id}>
                  <Item
                    clothesCategory={obj.clothesCategory}
                    price={obj.price}
                    discount={obj.discount}
                    imageURL={obj.imageURL}
                    humanCategory={obj.humanCategory}
                    id={obj.id}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {!loading && (
            <div className="bg-black w-[400px] h-[400px]">
              <div className="flex">
                <div>Loading...</div>{" "}
                <button
                  className="h-50 w-100 bg-red-400 border-red-400"
                  onClick={() => {
                    controller.abort();
                  }}
                >
                  Отменить загрузку
                </button>
                <button
                  className="h-50 w-100 bg-green-400 border-green-400"
                  onClick={() => {
                    ItemsRequest();
                  }}
                >
                  Перезагрузить
                </button>
              </div>
            </div>
          )}
        </div>
        {isMobile && (
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
        className={`flex ${
          isMobile ? "justify-center" : "justify-between"
        } items-center pt-[20px]  `}
      >
        <div className="text-gc2 w-full border-[0.5px] bg-gc2" />
        <div className="">
          <Link to={`/Category?human=${human}`}>
            <button className=" bg-black2 text-white py-4 px-10 whitespace-nowrap mx-4">
              Показать все
            </button>
          </Link>
        </div>
        {isMobile && <div className="text-gc2 w-full border-[0.5px] bg-gc2" />}
      </div>
    </div>
  );
};

export default CategoryItems;
