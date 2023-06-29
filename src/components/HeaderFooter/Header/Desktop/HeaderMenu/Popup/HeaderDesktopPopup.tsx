import React, { FC } from "react";
import Category from "./Category";
import SubCategory from "./SubCategory";
import { ICategories } from "../../../../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../../../RTK/store";
import { useNavigate } from "react-router-dom";
import {
  setCategoriesArray,
  setCategory,
} from "../../../../../../RTK/filter/filterSlice";

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

type props = { category: ICategories; show: boolean; setShow: any };

const HeaderDesktopPopup: FC<props> = ({ category, show, setShow }) => {
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
          <Category filter={filter} changeFilter={changeFilter} />
          <div className="w-full border-[0.5px] top-[-1px] mb-[40px] " />
          <div className="mx-auto max-w-[1144px] ">
            <div className="font-bold text-[25px] leading-[30.48px] text-gcCBCBCB mb-[30px]">
              <span>{category.nameFor}</span>
            </div>
            <SubCategory
              filter={filter}
              handleCategory={handleCategory}
              category={category}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderDesktopPopup;
