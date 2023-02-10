import React from "react";
import debounce from "lodash.debounce";
import HeaderDropMenu from "./HeaderDropMenu";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./../RTK/store";
import { setCategory, setQuery } from "../RTK/filter/filterSlice";
import { PopupClick, ICategories } from "../types/types";
import MenuDesktop from "./Menu/MenuDesktop";
import MenuMobile from "./Menu/MenuMobile";
import { useMatchMedia } from "./../hooks";
import { MatchMediaProps } from "../hooks/types";

export const categories = [
  { name: "Женщинам", type: "woman", nameFor: "Женская одежда" },
  { name: "Мужчинам", type: "man", nameFor: "Мужская одежда" },
  { name: "Детям", type: "kid", nameFor: "Детская одежда" },
];

const Header: React.FC = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();

  return (
    <div>
      {isMobile && <MenuMobile />}
      {isTablet && <MenuDesktop />}
      {isDesktop && <MenuDesktop />}
    </div>
  );
};

export default Header;
