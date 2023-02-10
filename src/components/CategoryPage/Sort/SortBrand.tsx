import React from "react";
import { setBrand } from "../../../RTK/filter/filterSlice";
import { useAppDispatch } from "../../../RTK/store";
import { PopupClick } from "../../../types/types";
import CheckBoxRadio from "./CheckBoxRadio";
import { fetchItems } from "./../../../RTK/asyncThunk/items";
import { useAppSelector } from "./../../../RTK/store";

type array = {
  name: string;
  quantity: number;
  arrayName: string;
};

type props = {
  name: string;
  array: array[];
};

const SortBrand: React.FC = () => {
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

  // brand1UX STATE && CHANGE FUNC

  const dispatch = useAppDispatch();

  const [brand1, setBrand1] = React.useState<{
    value: string;
    checked: boolean;
  }>({
    value: "Бренд1",
    checked: false,
  });
  const [brand2, setbrand2] = React.useState<{
    value: string;
    checked: boolean;
  }>({
    value: "Бренд2",
    checked: false,
  });
  const [brand3, setbrand3] = React.useState<{
    value: string;
    checked: boolean;
  }>({
    value: "Бренд3",
    checked: false,
  });

  const handlebrand1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrand1({ value: brand1.value, checked: !brand1.checked });
  };
  const handlebrand2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setbrand2({ value: brand2.value, checked: !brand2.checked });
  };
  const handlebrand3 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setbrand3({ value: brand3.value, checked: !brand3.checked });
  };

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!allChecked) {
      setBrand1({ value: brand1.value, checked: true });
      setbrand2({ value: brand2.value, checked: true });
      setbrand3({ value: brand3.value, checked: true });
    } else {
      setBrand1({ value: brand1.value, checked: false });
      setbrand2({ value: brand2.value, checked: false });
      setbrand3({ value: brand3.value, checked: false });
    }
  };

  const [allChecked, setAllChecked] = React.useState(false);

  // dispatch

  const handleAllValue = () => {
    const PullValue = [brand1, brand2, brand3];
    const Result = PullValue.filter((item) =>
      item.checked ? item.value : false
    );

    //  dispatch(setSortColor(Result))
    if (Result.length > 0) {
      const ResultName = Result.map((obj, i) => obj.value);
      dispatch(setBrand("ResultName"));
      setShow(false);
    }
  };

  React.useEffect(() => {
    if (brand1.checked && brand2.checked && brand3.checked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [brand1, brand2, brand3]);

  const handlePreventDefault = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div ref={ref} className="grid relative ">
      <div
        onClick={() => togglePopup()}
        className={`${
          show && "shadow-md"
        } flex justify-center items-center pt-[7px] pb-[3px] px-[9px] gap-x-[7px] `}
      >
        <button>Бренд</button>
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
        <form action="">
          <div className="flex flex-col z-20 absolute bottom-0 right-0 translate-x-[0%] translate-y-[100%] w-[230px] bg-white shadow-md ">
            <label className="my-5 mr-5 ml-auto cursor-pointer">
              <input
                type="checkbox"
                value="all"
                className="hidden"
                onChange={handleAllChecked}
                checked={allChecked}
              />
              <span
                className={`${
                  allChecked && "font-medium text-yc1 underline"
                }  `}
              >
                Выбрать все
              </span>
            </label>
            <div className="w-full border-[0.5px] border-gcE5" />
            <div className="flex flex-col mb-[30px] mx-[20px] gap-y-[16px] my-5">
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
                  <input
                    type="checkbox"
                    value={brand1.value}
                    onChange={handlebrand1}
                    checked={brand1.checked}
                    //             className=" before:w-[8px] before:h-[8px] before:border before:rounded-[50%] before:bg-yc1 before:border-yc1
                    //  border-gcE5 relative before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] "
                    className="hidden"
                  />
                  <CheckBoxRadio checked={brand1.checked} />
                  <span>Brand 1</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
                  <input
                    type="checkbox"
                    value={brand2.value}
                    onChange={handlebrand2}
                    checked={brand2.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={brand2.checked} />
                  <span>Brand 2</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
                  <input
                    type="checkbox"
                    value={brand3.value}
                    onChange={handlebrand3}
                    checked={brand3.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={brand3.checked} />
                  <span>Brand 3</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
            </div>
            <input
              type="button"
              value="Применить"
              onClick={handleAllValue}
              className="bg-black2 text-white w-[190px] h-[40px] flex justify-center items-center mx-auto my-5 cursor-pointer"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default SortBrand;
