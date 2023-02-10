import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { setCategoriesArray, setCategory } from "../RTK/filter/filterSlice";
import { ICategories } from "../types/types";
import { useAppDispatch, useAppSelector } from "./../RTK/store";
import { fetchItems } from "../RTK/asyncThunk/items";

const dropSubCategoryArray = [
  [
    "Футболки",
    "Штаны",
    "Майки",
    "Джинсы",
    "Куртки",
    "Рубашки",
    "Толстовки",
    "Брюки",
  ],
  ["Кроссовки", "Туфли", "Ботинки", "Тапочки", "Сандали"],
  ["Брелки", "Цепочки", "Ожерелья", "Галстуки"],
  [
    "Кросовки для бега",
    "Спортивные костюмы",
    "Шапочки для бассейна",
    "Футболки для бега",
    "Тренировочные маски",
  ],
  ["Резинки для волос", "Заколки"],
  ["Товары со скидкой", "Уцененные товары"],
];

const filterArray = [
  [" Одежда "],
  ["Обувь  "],
  [" Аксессуары "],
  ["Спорт  "],
  [" Красота "],
  [" Распродажа "],
];

// const brands = ["Бренд1", "Бренд2", "Бренд3"];

// const humanCategory = ["woman", "man", "kid"];
// const itemColor = [
//   "красный",
//   "синий",
//   "зеленый",
//   "желтый",
//   "черный",
//   "оранжевый",
//   "серый",
// ];
// const itemSize = ["XS", "M", "L", "S", "XL"];

// const clothesAll = dropSubCategoryArray.flat(1);
// clothesAll.pop();
// clothesAll.pop();
// var rand = Math.floor(Math.random() * clothesAll.length);

// const me = Array.from({ length: 120 }).map((obj, i: number) => ({
//   id: i + 500,
//   // id: i,

//   discount: Math.round(Math.random() * 20),
//   // discount: 0,

//   humanCategory:
//     humanCategory[Math.floor(Math.random() * humanCategory.length)],
//   price: Math.round(Math.random() * 10000),
//   rating: Math.round(Math.random() * 10),
//   brand: brands[Math.floor(Math.random() * brands.length)],
//   clothesCategory: clothesAll[Math.floor(Math.random() * clothesAll.length)],
//   imageURL: "item" + [Math.round(Math.random() * 4)],
//   // imageURL: "item" + id,
//   color: itemColor[Math.floor(Math.random() * itemColor.length)],
//   size: itemSize[Math.floor(Math.random() * itemSize.length)],
// }));

// console.log(me);

type props = { category: ICategories; show: boolean; setShow: any };

// COMPONENT  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const HeaderDropMenu: React.FC<props> = ({ category, show, setShow }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [filter, onSetFilter] = React.useState<number>(0);

  const changeFilter = (i: number) => {
    onSetFilter(i);
    onSetSubFilter(false);
  };

  // subFilter
  const { clothes, humanCategory } = useAppSelector(
    (state) => state.filterSlice.filter.category
  );

  const [subFilter, onSetSubFilter] = React.useState<false | number>(false);

  const handleCategory = (obj: string) => {
    dispatch(setCategory({ clothes: obj, humanCategory: category.type }));
    dispatch(setCategoriesArray(dropSubCategoryArray[filter]));

    setShow(false);
  };

  return (
    <>
      {show && (
        <div className="w-full bg-white shadow-md pb-[70px] select-none absolute z-20">
          <div className="max-w-[1144px] mx-auto">
            <div
              className="mt-[20px] bg-white w-full mx-auto duration-500
    before:
    "
            >
              <div className="mb-[18px]">
                <ul className="flex gap-[40px] font-medium text-gc1 text-[16px] leading-[19.5px] ">
                  {filterArray.map((obj, i) => (
                    <li
                      className={`${
                        filter == i ? "text-black2 font-bold" : ""
                      } cursor-pointer hover:text-black2 `}
                      onClick={() => changeFilter(i)}
                      key={i}
                    >
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full border-[0.5px] top-[-1px] mb-[40px] " />
          <div className="mx-auto max-w-[1144px] ">
            <div className="font-bold text-[25px] leading-[30.48px] text-gcCBCBCB mb-[30px]">
              <span>{category.nameFor}</span>
            </div>
            <nav>
              <ul className="grid grid-cols-4 grid-rows-6 mt-[30px] gap-x-[149px] gap-y-5 max-w-[1144px] h-[202px] whitespace-nowrap list-style pl-4 ">
                {dropSubCategoryArray[filter].map((obj, i) => (
                  <li
                    className="before:absolute relative before:-left-[16px] before:top-[60%] before:w-[6px] before:h-[6px] before:bg-[#F8991D] hover:text-orange-300"
                    key={obj + i}
                    onClick={() => handleCategory(obj)}
                  >
                    <Link
                      to={`/category?human=${category.type}&clothes=${obj}`}
                      className="cursor-pointer"
                    >
                      {obj}
                    </Link>
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
