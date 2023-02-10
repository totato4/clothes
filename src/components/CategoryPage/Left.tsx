import React from "react";
import { setCategory } from "../../RTK/filter/filterSlice";
import { useAppDispatch, useAppSelector } from "./../../RTK/store";

const Left = () => {
  const categoryArray = useAppSelector(
    (state) => state.filterSlice.filter.categoriesArray
  );

  const { clothes, humanCategory } = useAppSelector(
    (state) => state.filterSlice.filter.category
  );

  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="text-gcCBCBCB text-[16px] leading-[19.5px] font-normal">
        Категория
      </div>
      <div className="ml-[10px] mt-[14px] text-[14px] leading-[17.07px] font-normal text-black2">
        <ul className="grid gap-3">
          {categoryArray &&
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
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Left;
