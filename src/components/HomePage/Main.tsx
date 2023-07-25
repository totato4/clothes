import React from "react";
import { MatchMediaProps } from "../../hooks/types";
import CategoryItems from "../CategoryItems";
import { useMatchMedia } from "./../../hooks/use-match-media";
import ClothesTags from "./../../widgets/ClothesTags";

const Main = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();

  return (
    <div
      className={`container max-w-[1149px] mx-auto px-[5px] flex flex-auto ${
        isMobile && "mt-[90px] "
      } ${isTablet && "px-3"} `}
    >
      <div className="">
        {/* i understand how use not-last-child in tailwnd, but is not  . This is delete last child margin bottom */}
        <div className="mb-[-80px]">
          <CategoryItems human={"woman"} />
          <CategoryItems human={"man"} />
          <CategoryItems human={"kid"} />
        </div>
        <div
          className={`${
            isMobile &&
            "text-[9px] leading-[11px]  grid grid-cols-2 justify-between gap-x-1 gap-y-3 items-center mt-[110px]"
          }
            ${
              isTablet &&
              "font-normal grid grid-cols-3 justify-between  items-center text-[11px] leading-[13.41px] gap-x-[71px] gap-y-[25px] mt-[140px]"
            }
            ${
              isDesktop &&
              "font-normal grid grid-cols-5 justify-start whitespace-nowrap text-[11px] leading-[13.41px] gap-x-[71px] gap-y-[25px] mt-[171px]"
            }
              `}
        >
          <ClothesTags></ClothesTags>
        </div>
      </div>
    </div>
  );
};

export default Main;
