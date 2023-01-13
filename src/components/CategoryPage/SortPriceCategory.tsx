import React from "react";

type props = {
  catValue: number;
  amount: number;
  RangeVal: number[];
  setRangeVal: any;
};

const SortPriceCategory: React.FC<props> = ({
  catValue,
  amount,
  RangeVal,
  setRangeVal,
}) => {
  const handleChangeValue = () => {
    if (RangeVal[1] == catValue) {
      setRangeVal([-1, 100001]);
    } else {
      setRangeVal([-1, catValue]);
    }
  };

  return (
    <div
      onClick={handleChangeValue}
      className={`flex flex-nowrap justify-between items-center cursor-pointer hover:text-yc1 hover:transition-color ${
        RangeVal[1] == catValue && "text-yc1 "
      } `}
    >
      <div className="flex gap-[15px]">
        <input
          type="radio"
          name="check1"
          id=" "
          className={`${
            RangeVal[1] == catValue &&
            "before:w-[8px] before:h-[8px] before:border before:rounded-[50%] before:bg-yc1 before:border-yc1 border-gcE5 relative before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]"
          }`}
          //   className={`${  active[0] == index ? "before:w-[6px] before:h-[6px] before:border before:rounded-[50%] before:bg-yc1 before:border-yc1  before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]" : ""} border-gcE5 relative `}
        />
        <span>до {catValue} ₽</span>
      </div>
      <div className="text-gcE5">{amount}</div>
    </div>
  );
};

export default SortPriceCategory;
