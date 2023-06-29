import React, { FC } from "react";
import CheckBoxRadio from "./CheckBoxRadio";
import { useLocation, useSearchParams } from "react-router-dom";

type props = {
  array: any;
  value: any;
  onChange: any;
};

const SortList: FC<props> = ({ array, value, onChange }) => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const handleChange = (e: any, name: string, value: any) => {
    onChange(e.target.value);
    // @ts-ignore
    // searchParams.set( "brand": value);
    // setSearchParams(searchParams);
    // @ts-ignore
    // const params = searchParams;
    // setSearchParams(searchParams);
    // console.log(search);
  };

  return (
    <>
      <div className="w-full border-[0.5px] border-gcE5" />
      <div className="flex flex-col mb-[30px] mx-[20px] gap-y-[16px] my-5">
        {array.map((obj: any, i: number) => (
          <div key={i} className="flex justify-between items-center ">
            <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
              <input
                type="radio"
                value={obj.name}
                checked={value == obj.name ? true : false}
                onChange={(e) => handleChange(e, obj.arrayName, obj.name)}
                // onChange={e => searchParams.set("brand": obj.name)}
                //             className=" before:w-[8px] before:h-[8px] before:border before:rounded-[50%] before:bg-yc1 before:border-yc1
                //  border-gcE5 relative before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] "
                className="hidden"
              />
              <CheckBoxRadio checked={value == obj.name ? true : false} />

              <span>{obj.name}</span>
            </label>
            <div className="text-gcE5">{obj.quantity}</div>
          </div>
        ))}
        <input
          type="button"
          value="Применить"
          onClick={onChange}
          className="bg-black2 text-white w-[190px] h-[40px] flex justify-center items-center mx-auto my-5 cursor-pointer"
        />
      </div>
    </>
  );
};

export default SortList;
