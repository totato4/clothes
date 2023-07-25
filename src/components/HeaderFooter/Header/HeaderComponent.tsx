import React from "react";
import { MatchMediaProps } from "../../../hooks/types";
import { useMatchMedia } from "../../../hooks";
import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";
import Menu from "./Menu";
import HeaderAuth from "./Desktop/HeaderAuth/HeaderAuth";

const HeaderComponent = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();

  return (
    <div>
      {isMobile && <HeaderMobile />}

      {isTablet && (
        <>
          <HeaderAuth /> <Menu />
        </>
      )}
      {isDesktop && (
        <>
          <HeaderAuth /> <Menu />
        </>
      )}
    </div>
  );
};

export default HeaderComponent;
