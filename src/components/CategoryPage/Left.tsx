import React from "react";
import { useMatchMedia } from "../../hooks";
import { MatchMediaProps } from "../../hooks/types";
import { setCategory } from "../../RTK/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "./../../RTK/store";

const CategoryDropMenuArray = [
  {
    name: "Одежда",
    list: [
      "Футболки",
      "Штаны",
      "Майки",
      "Джинсы",
      "Куртки",
      "Рубашки",
      "Толстовки",
      "Брюки",
    ],
  },
  {
    name: "Обувь",
    list: ["Кроссовки", "Туфли", "Ботинки", "Тапочки", "Сандали"],
  },
  {
    name: "Аксессуары",
    list: ["Брелки", "Цепочки", "Ожерелья", "Галстуки"],
  },
  {
    name: "Спорт",
    list: [
      "Кросовки для бега",
      "Спортивные костюмы",
      "Шапочки для бассейна",
      "Футболки для бега",
      "Тренировочные маски",
    ],
  },
  {
    name: "Красота",
    list: ["Резинки для волос", "Заколки"],
  },
  {
    name: "Распродажа",
    list: ["Товары со скидкой", "Уцененные товары"],
  },
];

const Left = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();

  const { clothes, humanCategory } = useAppSelector(
    (state) => state.filterSlice.filter.category
  );

  const dispatch = useAppDispatch();

  const [catName, setCatName] = React.useState("");
  const handleDropDown = (name: string) => {
    if (catName == name) {
      setCatName("");
    } else {
      setCatName(name);
    }
  };
  const [listName, setListName] = React.useState(clothes);
  const handleListNameChange = (name: string) => {
    if (listName == name) {
      setListName("");
      dispatch(setCategory({ clothes: "", humanCategory: humanCategory }));
    } else {
      setListName(name);
      dispatch(setCategory({ clothes: name, humanCategory: humanCategory }));
    }
  };

  return (
    <div>
      <div className="text-gcCBCBCB text-[16px] leading-[19.5px] font-normal">
        Категория
      </div>
      <div className="ml-[10px] mt-[14px] text-[14px] leading-[17.07px] font-normal text-black2 transition-all duration-300">
        <ul className="grid gap-3">
          {/* {categoryArray &&
            categoryArray.map((arr: any, i: number) => (
              <li
                key={i}
                className={`${arr == clothes && "text-yc1"} cursor-pointer`}
                onClick={() =>
                  dispatch(
                    setCategory({ clothes: arr, humanCategory: humanCategory })
                  )
                }
              >
                {arr}
              </li>
            ))} */}
          {CategoryDropMenuArray.map((obj, i) => (
            <div
              className="select-none cursor-pointer grid gap-y-1"
              key={obj.name + i}
            >
              <div
                className={`flex gap-1 items-center 
                ${catName == obj.name && "font-semibold"}`}
                onClick={() => handleDropDown(obj.name)}
              >
                {obj.name}
                <div
                  className={`${
                    catName == obj.name && "-rotate-180 "
                  } transition-all duration-0 ease-in`}
                >
                  <svg
                    width="11"
                    height="6"
                    viewBox="0 0 11 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0.984221L0.984221 0L5.01578 4.03156L9.04734 0L10.0316 0.984221L5.01578 6L0 0.984221Z"
                      fill="black"
                    />
                  </svg>
                </div>
              </div>
              <div className="overflow-hidden">
                <div
                  className={`${catName !== obj.name && " mt-[-200%] "} 
                     cursor-pointer   transition-all duration-300 
                  ${isDesktop && "pl-4 gap-y-2 grid"}
                  `}
                >
                  {obj.list.map((list, i) => (
                    <li
                      className={`${
                        listName == list ? "text-yc1" : "text-black"
                      }   cursor-pointer `}
                      onClick={() => handleListNameChange(list)}
                      key={list + i}
                    >
                      {list}
                    </li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Left;
