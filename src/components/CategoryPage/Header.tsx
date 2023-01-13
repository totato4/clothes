import React from "react";
import { PopupClick } from "../../types/types";
import Sort from "./Sort/Sort";

const tagsArray = [
  { name: "Худи", tagId: 1 },
  { name: "Свитшоты", tagId: 2 },
  { name: "Оверсайз", tagId: 3 },
  { name: "С капюшоном", tagId: 4 },
  { name: "Удлиненные", tagId: 1 },
  { name: "Свободного кроя", tagId: 2 },
  { name: "Со стразами", tagId: 3 },
  { name: "Из неопрена", tagId: 4 },
  { name: "С воротником", tagId: 5 },
  { name: "Без воротника", tagId: 6 },
];

const Header = () => {
  const [showTags, setShowTags] = React.useState(false);

  return (
    <div className="grid gap-[30px] mb-[23px] ">
      <div className="flex justify-between">
        <div className="flex gap-4 font-bold text-[20px] leading-[24.38px] text-black2">
          ЖЕНСКИЕ ТОЛСТОВКИ И СВИТШОТЫ
          <div className="font-normal text-[20px] leading-[24.38px] text-gcCBCBCB">
            254 678 товаров
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 0H13C12.45 0 12 0.45 12 1C12 1.55 12.45 2 13 2H17C17.55 2 18 1.55 18 1C18 0.45 17.55 0 17 0ZM18 11C18 10.45 17.55 10 17 10L1 10C0.450001 10 0 10.45 0 11C0 11.55 0.450001 12 1 12L17 12C17.55 12 18 11.55 18 11ZM17 5L7 5C6.45 5 6 5.45 6 6C6 6.55 6.45 7 7 7L17 7C17.55 7 18 6.55 18 6C18 5.45 17.55 5 17 5Z"
              fill="#E5E5E5"
            />
          </svg>
          <div className="flex items-center gap-1 text-[12px] leading-[14.63px] font-semibold">
            по популярности
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
      </div>
      <div className="flex justify-start gap-[12px] items-center">
        <div className="flex flex-wrap gap-x-[7px] gap-y-2 text-[12px] leading-[14.63px] ">
          {showTags
            ? tagsArray.map((obj, i) => (
                <button
                  key={i + 200}
                  className="p-[9px] border border-black2 text-center"
                >
                  {obj.name}
                </button>
              ))
            : tagsArray.slice(0, 8).map((obj, i) => (
                <button
                  key={i + 100}
                  className="p-[9px] border border-black2 text-center"
                >
                  {obj.name}
                </button>
              ))}
        </div>
        {!showTags && (
          <div className=" text-gc1 text-[12px] leading-[14.63px] ">
            <button onClick={() => setShowTags(true)} className="underline">
              показать все
            </button>
          </div>
        )}
      </div>
      <Sort />
    </div>
  );
};

export default Header;
