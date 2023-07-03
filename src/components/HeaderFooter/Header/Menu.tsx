import React, { useRef, useState } from "react";
import { ICategories } from "../../../types/types";
import { useAppDispatch } from "../../../RTK/store";
import HeaderLOGO from "./Desktop/HeaderLOGO/HeaderLOGO";
import Search from "./Desktop/SearchInput/Search";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";
import MenuDropDown from "./MenuDropDown";
import MenuDropDownList from "./MenuDropDownList";
import { clothesArray } from "../../../Constants/Constants";

export enum MenuTitle {
  WOMAN = "ЖЕНСКАЯ ОДЕЖДА",
  MAN = "МУЖСКАЯ ОДЕЖДА",
  KID = "ДЕТСКАЯ ОДЕЖДА",
}
export enum forHuman {
  WOMAN = "woman",
  MAN = "man",
  KID = "kid",
}

const Menu = () => {
  const [category, setCategory] = useState(0);
  // const category = useAppSelector((state) => state.filterSlice.filter.category);
  const dispatch = useAppDispatch();

  return (
    <div className="w-screen relative">
      <div className="max-w-[1144px]  mx-auto  py-6 flex items-center h-[60px]">
        <HeaderLOGO />
        <MenuList>
          <MenuItem name={"ЖЕНЩИНАМ"}>
            <MenuDropDown
              category={category}
              setCategory={setCategory}
              title={MenuTitle.WOMAN}
              forHuman={forHuman.WOMAN}
            ></MenuDropDown>
          </MenuItem>
          <MenuItem name={"МУЖЧИНАМ"} pl={"59px"} pr={"80px"}>
            <MenuDropDown
              category={category}
              setCategory={setCategory}
              title={MenuTitle.MAN}
              forHuman={forHuman.MAN}
            ></MenuDropDown>
          </MenuItem>
          <MenuItem name={"ДЕТЯМ"}>
            <MenuDropDown
              category={category}
              setCategory={setCategory}
              title={MenuTitle.KID}
              forHuman={forHuman.KID}
            ></MenuDropDown>
          </MenuItem>
        </MenuList>
        <Search />
      </div>
    </div>
  );
};

export default Menu;
