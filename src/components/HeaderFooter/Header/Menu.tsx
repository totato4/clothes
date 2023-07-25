import React, { useState } from "react";
import { useAppDispatch } from "../../../RTK/store";
import HeaderLOGO from "./Desktop/HeaderLOGO/HeaderLOGO";
import Search from "./Desktop/SearchInput/Search";
import MenuItem from "./MenuItem";
import MenuList from "./MenuList";
import MenuDropDown from "./MenuDropDown";

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
  const p = 1;
  return (
    <div onMouseLeave={() => setCategory(0)} className="w-screen relative">
      <div className="max-w-[1144px]  mx-auto  py-6 flex items-center h-[60px]">
        <HeaderLOGO />
        <div className="flex mx-auto align-middle desktop:[&>*:nth-child(2)]:ml-[59px] desktop:[&>*:nth-child(2)]:mr-[80px] desktop:ml-[273px] desktop:gap-x-0 gap-x-4 font-normal text-[16px] leading-[19.5px] ">
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
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Menu;
