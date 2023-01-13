import React from "react";
import { setPrice } from "../../../RTK/sort/SortSlice";
import { useAppDispatch } from "../../../RTK/store";
import { PopupClick } from "../../../types/types";
import RangeSlider from "./RangeSlider/RangeSlider";
import SortPriceCategory from "./../SortPriceCategory";

const sortCatList = [1000, 2000, 3000, 5000, 10000, 25000, 50000, 100000];

const SortPrice = () => {
  const [show, setShow] = React.useState(false);

  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const _event = event as MouseEvent & PopupClick;
      if (ref.current && !_event.composedPath().includes(ref.current)) {
        setShow(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const togglePopup = () => {
    setShow(!show);
  };

  // Range Slider
  const [RangeVal, setRangeVal] = React.useState<number[]>([-1, 100001]);

  // React.useEffect(() => {
  //   setRangeVal([minVal, maxVal]);
  //   return () => {
  //     setRangeVal([0, 100000]);
  //   };
  // }, [minVal, maxVal]);

  const updateRange = (e: MouseEvent, data: number[]) => {
    // setMinVal(data[0]);
    // setMaxVal(data[1]);
    setRangeVal(data);
  };

  const handleMaxValue = (e: any): void => {
    setRangeVal([RangeVal[0], e.target.value]);
  };

  const handleMinValue = (e: any): void => {
    setRangeVal([e.target.value, RangeVal[1]]);
  };

  // Price change

  const dispatch = useAppDispatch();

  const handleChangeRangeVal = () => {
    dispatch(setPrice(RangeVal));
  };

  return (
    <div ref={ref} className="grid relative ">
      <div
        onClick={() => togglePopup()}
        className={` ${
          show && "shadow-md"
        } flex justify-center items-center pt-[7px] pb-[3px] px-[9px] gap-x-[7px] `}
      >
        <button>Цена</button>
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
      {show && (
        <div className="flex flex-col z-20 absolute bottom-0 right-0 translate-x-[0%] translate-y-[100%] w-[230px] bg-white shadow-md ">
          <div className="flex whitespace-nowrap pt-5 pl-5 mb-[10px] font-semibold">
            задать диапазон
          </div>
          <div className="mx-auto my-[10px]">
            <input
              className="w-[95px] h-[30px] placeholder:text-gcC4 border border-gcE5"
              type="text"
              placeholder="от"
              value={RangeVal[0] === -1 ? "" : RangeVal[0]}
              onChange={(e) => handleMinValue(e)}
            />
            <input
              className="w-[95px] h-[30px] placeholder:text-gcC4 border border-gcE5"
              type="text"
              placeholder="до"
              value={RangeVal[1] == 100001 ? "" : RangeVal[1]}
              onChange={(e) => handleMaxValue(e)}
            />
          </div>
          <div>
            <RangeSlider updateRange={updateRange} RangeVal={RangeVal} />
          </div>
          <div>
            <button
              onClick={handleChangeRangeVal}
              className="bg-black2 text-white w-[190px] h-[40px] flex justify-center items-center mx-auto my-5"
            >
              Применить
            </button>
          </div>
          <div className="flex justify-between relative">
            <div className="border-[0.5px] w-[159px] border-gcE5 mb-[11px] " />
            <div className="mr-5 absolute right-0 top-0 translate-y-[-45%]  text-gcE5">
              ИЛИ
            </div>
          </div>
          <div className="flex flex-col mb-[30px] mx-[20px] gap-y-[16px]">
            {sortCatList.map((arr, i) => (
              <SortPriceCategory
                key={i}
                catValue={arr}
                amount={Math.floor(Math.random() * 100) + 1}
                RangeVal={RangeVal}
                setRangeVal={setRangeVal}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortPrice;
