import React, { useState } from "react";
import { Link } from "react-router-dom";
import { setCategory } from "../RTK/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "./../RTK/store";

const dropSubCategoryArray = [
  [
    "Платья и сарафаны",
    "Брюки",
    "Джемперы и кардиганы",
    "Одежда для дома и сна",
    "Верхняя одежда",
    "Блузы и туники",
    "Юбки",
    "Топы",
    "Джинсы",
    "Белье",
    "Пиджаки и костюмы",
    "Пляжная одежда",
    "Шорты",
    "Рубашки",
    "Комбинезоны",
    "Большие размеры",
    "Майки",
    "Бриджи и капри",
    "Спортивные костюмы",
    "Пиджаки и костюмы",
    "Жилеты",
    "Толстовки и свитшоты",
    "Футболки и поло",
  ],
  [
    "Комбинезоны",
    "Большие размеры",
    "Майки",
    "Бриджи и капри",
    "Спортивные костюмы",
    "Пиджаки и костюмы",
    "Жилеты",
    "Толстовки и свитшоты",
    "Футболки и поло",
  ],
  [
    "Топы",
    "Джинсы",
    "Белье",
    "Пляжная одежда",
    "Шорты",
    "Жилеты",
    "Толстовки и свитшоты",
    "Футболки и поло",
  ],
  [
    "Майки",
    "Бриджи и капри",
    "Спортивные костюмы",
    "Пиджаки и костюмы",
    "Жилеты",
    "Толстовки и свитшоты",
    "Футболки и поло",
  ],
  [
    "Джемперы и кардиганы",
    "Блузы и туники",
    "Юбки",
    "Шорты",
    "Рубашки",
    "Футболки и поло",
  ],
  [
    "Юбки",
    "Топы",
    "Пляжная одежда",
    "Шорты",
    "Рубашки",
    "Комбинезоны",
    "Большие размеры",
    "Майки",
    "Бриджи и капри",
  ],
  [
    "Пиджаки и костюмы",
    "Пляжная одежда",
    "Пиджаки и костюмы",
    "Жилеты",
    "Футболки и поло",
  ],
];

const filterArray = [
  [" Одежда "],
  ["Обувь  "],
  [" Аксессуары "],
  ["Спорт  "],
  ["Бренды  "],
  [" Красота "],
  [" Распродажа "],
];

const categories = [[], "ЖЕНСКАЯ ОДЕЖДА", "МУЖСКАЯ ОДЕЖДА", "ДЕТСКАЯ ОДЕЖДА"];
type props = { category: number | false };

const HeaderDropMenu: React.FC<props> = ({ category }) => {
  const dispatch = useAppDispatch();

  // filter

  const [filter, onSetFilter] = React.useState<false | number>(false);

  const changeFilter = (i: false | number) => {
    onSetFilter(i);
    onSetSubFilter(false);
  };

  // subFilter

  const [subFilter, onSetSubFilter] = React.useState<false | number>(false);

  const handleCategory = (obj: string) => {
    dispatch(setCategory(obj));
  };

  return (
    <>
      {category !== false && (
        <div className="w-full bg-white shadow-md pb-[70px] select-none absolute z-20">
          <div className="max-w-[1144px] mx-auto">
            <div
              className="mt-[20px] bg-white w-full mx-auto duration-500
    before:
    "
            >
              <div className="mb-[18px]">
                <nav>
                  <ul className="flex gap-[40px] font-medium text-gc1 text-[16px] leading-[19.5px] ">
                    {filterArray.map((obj, i) => (
                      <li
                        className={`${
                          filter == i ? "text-black2 font-bold" : ""
                        } cursor-pointer`}
                        onClick={() => changeFilter(i)}
                        key={i}
                      >
                        {obj}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="w-full border-[0.5px] top-[-1px] mb-[40px] " />
          <div className="mx-auto max-w-[1144px] ">
            <div className="font-bold text-[25px] leading-[30.48px] text-gcCBCBCB mb-[30px]">
              <span>
                {categories[Number(category)].toString().toUpperCase()}
              </span>
            </div>
            <nav>
              <ul className="grid grid-cols-4 grid-rows-6 mt-[30px] gap-x-[149px] gap-y-5 max-w-[1144px] h-[202px] whitespace-nowrap list-style pl-4 ">
                {filter !== false &&
                  dropSubCategoryArray[filter].map((obj, i) => (
                    <li
                      className="before:absolute relative before:-left-[16px] before:top-[60%] before:w-[6px] before:h-[6px] before:bg-[#F8991D]"
                      key={obj + i}
                      onClick={() => handleCategory(obj)}
                    >
                      <Link to="/Category">{obj}</Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderDropMenu;
