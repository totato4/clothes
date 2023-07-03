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
        <div className="h-[37.5px] flex justify-start">
          <ul className="flex gap-[40px] font-medium text-gc1 text-[16px] leading-[19.5px] ">
            {filterArray.map((obj, i) => (
              <li
                className={`${
                  filter == i && "text-black2 font-bold"
                } cursor-pointer hover:text-black2 relative`}
                onMouseEnter={() => changeFilter(i)}
                key={i}
              >
                {obj}
                {filter == i && (
                  <div
                    className={`${
                      filter == i &&
                      "absolute bottom-0 left-0 right-0 w-full bg-bottom border-b-[#F8991D] border-b-[2px] translate-y-[100%] "
                    }`}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
