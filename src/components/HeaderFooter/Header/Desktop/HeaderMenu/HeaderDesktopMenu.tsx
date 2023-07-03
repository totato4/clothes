import { FC, useState } from "react";
import { ICategories } from "../../../../../types/types";

export const categories = [
  { name: "Женщинам", type: "woman", nameFor: "Женская одежда" },
  { name: "Мужчинам", type: "man", nameFor: "Мужская одежда" },
  { name: "Детям", type: "kid", nameFor: "Детская одежда" },
];

type props = {
  category: any;
  show: any;
  setShow: (value: boolean) => void;
  setCategory: (value: ICategories) => void;
};

const HeaderDesktopMenu: FC<props> = ({
  category,
  show,
  setShow,
  setCategory,
}) => {
  const toggleMenu = (obj: ICategories) => {
    if (category.name == obj.name) {
      setShow(!show);
    } else {
      setCategory(obj);
      setShow(true);
    }
  };

  return (
    <nav>
      <ul className=" flex gap-14 justify-center items-center align-middle font-normal text-[16px] leading-[19.5px]">
        {categories.map((obj, i) => (
          <li
            key={i}
            onClick={() => toggleMenu(obj)}
            onMouseEnter={() => setCategory(obj)}
            className={
              category.name === obj.name
                ? "text-yc1 cursor-pointer transition-colors"
                : "cursor-pointer hover:text-orange-300 transition duration-100"
            }
          >
            {obj.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderDesktopMenu;
