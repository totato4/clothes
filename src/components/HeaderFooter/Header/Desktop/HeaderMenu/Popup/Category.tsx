import React from "react";
const filterArray = [
  [" Одежда "],
  ["Обувь  "],
  [" Аксессуары "],
  ["Спорт  "],
  [" Красота "],
  [" Распродажа "],
];

const Category = ({ filter, changeFilter }: any) => {
  return (
    <div className="max-w-[1144px] mx-auto">
      <div
        className="mt-[20px] bg-white w-full mx-auto duration-500
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
  );
};

export default Category;
