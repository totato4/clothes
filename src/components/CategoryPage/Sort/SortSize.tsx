import React from "react";
import { setSize } from "../../../RTK/filter/filterSlice";
import { useAppDispatch } from "../../../RTK/store";
import { PopupClick } from "../../../types/types";
import CheckBoxRadio from "./CheckBoxRadio";

// 110 STRING

type array = {
  name: string;
  quantity: number;
  arrayName: string;
};

const SortSize: React.FC = () => {
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

  // XSUX STATE && CHANGE FUNC

  const dispatch = useAppDispatch();

  const [XS, setXS] = React.useState<{ value: string; checked: boolean }>({
    value: "XS",
    checked: false,
  });
  const [S, setS] = React.useState<{
    value: string;
    checked: boolean;
  }>({
    value: "S",
    checked: false,
  });
  const [M, setM] = React.useState<{ value: string; checked: boolean }>({
    value: "M",
    checked: false,
  });

  const [L, setL] = React.useState<{ value: string; checked: boolean }>({
    value: "L",
    checked: false,
  });

  const [XL, setXL] = React.useState<{ value: string; checked: boolean }>({
    value: "XL",
    checked: false,
  });

  const handleXS = (e: React.ChangeEvent<HTMLInputElement>) => {
    setXS({ value: XS.value, checked: !XS.checked });
  };
  const handleS = (e: React.ChangeEvent<HTMLInputElement>) => {
    setS({ value: S.value, checked: !S.checked });
  };
  const handleM = (e: React.ChangeEvent<HTMLInputElement>) => {
    setM({ value: M.value, checked: !M.checked });
  };
  const handleL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setL({ value: L.value, checked: !L.checked });
  };

  const handleXL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setXL({ value: XL.value, checked: !XL.checked });
  };

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!allChecked) {
      setXS({ value: XS.value, checked: true });
      setS({ value: S.value, checked: true });
      setM({ value: M.value, checked: true });
      setL({ value: L.value, checked: true });
      setXL({ value: XL.value, checked: true });
    } else {
      setXS({ value: XS.value, checked: false });
      setS({ value: S.value, checked: false });
      setM({ value: M.value, checked: false });
      setL({ value: L.value, checked: false });
      setXL({ value: XL.value, checked: false });
    }
  };

  const [allChecked, setAllChecked] = React.useState(false);
  const handleAllValue = () => {
    const PullValue = [XS, S, M, L, XL];
    const Result = PullValue.filter((item) =>
      item.checked ? item.value : false
    );

    //  dispatch(setSortColor(Result))
    if (Result.length > 0) {
      const ResultName = Result.map((obj, i) => obj.value);
      // NOT STRING TO ACTIVATE THIS COMPONENT !!!!!!!!!!!!!!!!
      dispatch(setSize("ResultName"));
      setShow(false);
    }
  };

  React.useEffect(() => {
    if (XS.checked && S.checked && M.checked && L.checked && XL.checked) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [XS, S, M, L, XL, allChecked]);

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
        <button>Размер</button>
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
                    value={XS.value}
                    onChange={handleXS}
                    checked={XS.checked}
                    //             className=" before:w-[8px] before:h-[8px] before:border before:rounded-[50%] before:bg-yc1 before:border-yc1
                    //  border-gcE5 relative before:absolute before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] "
                    className="hidden"
                  />
                  <CheckBoxRadio checked={XS.checked} />
                  <span>XS</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
                  <input
                    type="checkbox"
                    value={M.value}
                    onChange={handleM}
                    checked={M.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={M.checked} />
                  <span>M</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
                  <input
                    type="checkbox"
                    value={L.value}
                    onChange={handleL}
                    checked={L.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={L.checked} />
                  <span>L</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
                  <input
                    type="checkbox"
                    value={S.value}
                    onChange={handleS}
                    checked={S.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={S.checked} />
                  <span>S</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer  w-full mr-[20px]">
                  <input
                    type="checkbox"
                    value={XL.value}
                    onChange={handleXL}
                    checked={XL.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={XL.checked} />
                  <span>XL</span>
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

export default SortSize;
