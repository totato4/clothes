import React from "react";
import { useAppDispatch } from "../../../RTK/store";
import { setBrand, setColor, setSize } from "../../../RTK/filter/filterSlice";
import CheckBoxRadio from "./CheckBoxRadio";
import { PopupClick } from "../../../types/types";

type array = {
  name: string;
  quantity: number;
  arrayName: string;
};

type props = {
  popupName: string;
  array: array[];
  dispatchProps: string;
};

const ItemFilter: React.FC<props> = ({ popupName, array, dispatchProps }) => {
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

  //
  const [value, setValue] = React.useState<string>("");

  const dispatch = useAppDispatch();

  const onDispatch = (dispatchValue: string) => {
    if (dispatchProps == "setBrand") {
      dispatch(setBrand(dispatchValue));
    }
    if (dispatchProps == "setColor") {
      dispatch(setColor(dispatchValue));
    }
    if (dispatchProps == "setSize") {
      dispatch(setSize(dispatchValue));
    }
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const handleAllChange = (event: React.MouseEvent<HTMLSpanElement>) => {
    setValue("");
    console.log("SET VALUE");
    onDispatch("");
    console.log("ДИСПАТЧ");
    setShow(false);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    onDispatch(value);
    setShow(false);
  };

  return (
    <div ref={ref} className="grid relative ">
      <div
        onClick={() => togglePopup()}
        className={`${
          show && "shadow-md"
        } flex justify-center items-center pt-[7px] pb-[3px] px-[9px] gap-x-[7px] `}
      >
        <button>{popupName}</button>
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
        <form>
          <div className="flex flex-col z-20 absolute bottom-0 right-0 translate-x-[0%] translate-y-[100%] w-[230px] bg-white shadow-md ">
            <label className="my-5 mr-5 ml-auto cursor-pointer">
              <span
                onClick={handleAllChange}
                className={"font-medium text-yc1 underline"}
              >
                Выбрать все
              </span>
            </label>
            <div className="w-full border-[0.5px] border-gcE5" />
            <div className="flex flex-col mb-[30px] mx-[20px] gap-y-[16px] my-5">
              {array.map((obj, i) => (
                <div key={i} className="flex justify-between items-center ">
                  <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
                    <input
                      type="radio"
                      value={obj.name}
                      checked={value == obj.name ? true : false}
                      onChange={handleRadioChange}
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
            </div>
            <input
              type="button"
              value="Применить"
              onClick={handleSubmit}
              className="bg-black2 text-white w-[190px] h-[40px] flex justify-center items-center mx-auto my-5 cursor-pointer"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default ItemFilter;
