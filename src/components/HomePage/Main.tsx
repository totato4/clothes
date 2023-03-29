import React from "react";
import { MatchMediaProps } from "../../hooks/types";
import CategoryItems from "../CategoryItems";
import { Slider } from "../Slider";
import { useMatchMedia } from "./../../hooks/use-match-media";
import Button from "@mui/material/Button";

const filterTagsArray = [
  "Женские пальто с заклепками",
  "Брюки для девочек стильные",
  "Мужские джинсы с завязками",
  "Женские пальто с заклепками",
  "Зонты для девочек осенние",
  "Сандалии для мальчиков",
  "Женские пальто с заклепками",
  "Леггинсы для девочек",
  "Мужские шорты для сна",
  "Сарафаны для малышей",
  "Джинсы для девочек",
  "Леггинсы для девочек",
  "Зонты для девочек осенние",
  "Рубашки для мальчиков",
  "Брюки для мальчиков",
  "Мужские джинсы с завязками",
  "Женские пальто с заклепками",
  "Брюки для мальчиков",
  "Женские пальто с заклепками",
  "Брюки для девочек стильные",
  "Сандалии для мальчиков",
  "Сарафаны для малышей",
  "Рубашки для мальчиков",
  "Женские пальто с заклепками",
  "Брюки для девочек стильные",
  "Мужские джинсы с завязками",
  "Женские пальто с заклепками",
  "Зонты для девочек осенние",
  "Сандалии для мальчиков",
  "Женские пальто с заклепками",
  "Леггинсы для девочек",
  "Мужские шорты для сна",
  "Сарафаны для малышей",
  "Джинсы для девочек",
  "Леггинсы для девочек",
  "Зонты для девочек осенние",
  "Рубашки для мальчиков",
  "Брюки для мальчиков",
  "Мужские джинсы с завязками",
  "Женские пальто с заклепками",
  "Брюки для мальчиков",
  "Женские пальто с заклепками",
  "Брюки для девочек стильные",
  "Сандалии для мальчиков",
  "Сарафаны для малышей",
  "Рубашки для мальчиков",
];

const Main = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();

  return (
    <div
      className={`container max-w-[1149px] mx-auto px-[5px] flex flex-auto ${
        isMobile && "mt-[90px] "
      } ${isTablet && "px-3"} `}
    >
      <div className="">
        <div>
          <CategoryItems human={"woman"} />
          <CategoryItems human={"man"} />
          <CategoryItems human={"kid"} />
        </div>
        <div
          className={`${
            isMobile &&
            "text-[9px] leading-[11px]  grid grid-cols-2 justify-between gap-x-1 gap-y-3 items-center "
          }
            ${
              isTablet &&
              "font-normal grid grid-cols-3 justify-between  items-center text-[11px] leading-[13.41px] gap-x-[71px] gap-y-[25px]"
            }
            ${
              isDesktop &&
              "font-normal grid grid-cols-5 justify-start whitespace-nowrap text-[11px] leading-[13.41px] gap-x-[71px] gap-y-[25px]"
            }
              `}
        >
          {filterTagsArray.map((obj, i) => (
            <div
              key={i}
              className={`
              
              } text-[11px] leading-[13.41px] font-normal text-gc1 flex`}
            >
              <button className="">{obj}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
