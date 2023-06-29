import React from "react";
import { MatchMediaProps } from "../../../hooks/types";
import { useMatchMedia } from "../../../hooks";
import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";

const HeaderComponent = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();

  return (
    <div>
      {isMobile && <HeaderMobile />}
      {isTablet && <HeaderDesktop />}
      {isDesktop && <HeaderDesktop />}
    </div>
  );
};

export default HeaderComponent;
