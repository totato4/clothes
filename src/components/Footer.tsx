import React from "react";
import { useMatchMedia } from "./../hooks/use-match-media";

const Footer = () => {
  const { isTablet, isDesktop, isMobile }: any = useMatchMedia();

  return (
    <div className="  mt-[80px] bg-gc3 w-full">
      <div
        className={`${
          isMobile
            ? "flex-wrap justify-center gap-x-4 gap-y-3 whitespace-nowrap"
            : "justify-between"
        } flex  py-5 container mx-auto max-w-[1144px] text-gc1`}
      >
        <div className={`${isMobile ? "gap-x-8" : "gap-x-12"} flex `}>
          <div className="text-gc1 font-bold">
            <button>LOGO</button>
          </div>
          <div>
            <a href="#">О нас</a>
          </div>
          <div>
            <a href="#">Обратная связь</a>
          </div>
        </div>
        <div>
          <span>© 2021 - Все права защищны</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
