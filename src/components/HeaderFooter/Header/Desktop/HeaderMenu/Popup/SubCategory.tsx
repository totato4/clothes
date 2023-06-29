import React from "react";
import { Link } from "react-router-dom";

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

const SubCategory = ({ filter, handleCategory, category }: any) => {
  return (
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
  );
};

export default SubCategory;
