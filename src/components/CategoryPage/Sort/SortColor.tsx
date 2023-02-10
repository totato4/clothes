import React from "react";
import { setColor } from "../../../RTK/filter/filterSlice";
import { useAppDispatch } from "../../../RTK/store";
import { PopupClick } from "../../../types/types";
import CheckBoxRadio from "./CheckBoxRadio";

type array = {
  name: string;
  quantity: number;
  arrayName: string;
};

type props = {
  name: string;
  array: array[];
};

const SortColor: React.FC = () => {
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

  // REDUX STATE && CHANGE FUNC

  const dispatch = useAppDispatch();

  const [red, setRed] = React.useState<{ value: string; checked: boolean }>({
    value: "красный",
    checked: false,
  });
  const [yellow, setYellow] = React.useState<{
    value: string;
    checked: boolean;
  }>({
    value: "желтый",
    checked: false,
  });
  const [blue, setBlue] = React.useState<{ value: string; checked: boolean }>({
    value: "синий",
    checked: false,
  });

  const [green, setGreen] = React.useState<{ value: string; checked: boolean }>(
    {
      value: "зеленый",
      checked: false,
    }
  );

  const [black, setBlack] = React.useState<{ value: string; checked: boolean }>(
    {
      value: "черный",
      checked: false,
    }
  );
  const [orange, setOrange] = React.useState<{
    value: string;
    checked: boolean;
  }>({
    value: "оранжевый",
    checked: false,
  });
  const [gray, setGray] = React.useState<{ value: string; checked: boolean }>({
    value: "серый",
    checked: false,
  });

  const handleRed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRed({ value: red.value, checked: !red.checked });
  };
  const handleYellow = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYellow({ value: yellow.value, checked: !yellow.checked });
  };
  const handleBlue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlue({ value: blue.value, checked: !blue.checked });
  };
  const handleGreen = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGreen({ value: green.value, checked: !green.checked });
  };

  const handleBlack = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBlack({ value: black.value, checked: !black.checked });
  };
  const handleOrange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrange({ value: orange.value, checked: !orange.checked });
  };
  const handleGray = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGray({ value: gray.value, checked: !gray.checked });
  };

  const handleAllChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!allChecked) {
      setRed({ value: red.value, checked: true });
      setYellow({ value: yellow.value, checked: true });
      setBlue({ value: blue.value, checked: true });
      setGreen({ value: green.value, checked: true });
      setBlack({ value: black.value, checked: true });
      setOrange({ value: orange.value, checked: true });
      setGray({ value: gray.value, checked: true });
    } else {
      setRed({ value: red.value, checked: false });
      setYellow({ value: yellow.value, checked: false });
      setBlue({ value: blue.value, checked: false });
      setGreen({ value: green.value, checked: false });
      setBlack({ value: black.value, checked: false });
      setOrange({ value: orange.value, checked: false });
      setGray({ value: gray.value, checked: false });
    }
  };

  const [allChecked, setAllChecked] = React.useState(false);
  const handleAllValue = () => {
    const PullValue = [red, yellow, blue, green, black, orange, gray];
    const Result = PullValue.filter((item) =>
      item.checked ? item.value : false
    );

    //  dispatch(setSortColor(Result))
    if (Result.length > 0) {
      const pureResult = Result.map((obj, i) => obj.value);
      // NOT STRING TO ACTIVATE THIS COMPONENT !!!!!!!!!!!!!!!!
      dispatch(setColor("pureResult"));
      setShow(false);
    }
  };

  React.useEffect(() => {
    if (
      red.checked &&
      yellow.checked &&
      blue.checked &&
      green.checked &&
      black.checked &&
      orange.checked &&
      gray.checked
    ) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [red, yellow, blue, green, black, orange, gray, allChecked]);

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
        <button>Цвет</button>
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
                <label className="flex gap-[15px] cursor-pointer">
                  <input
                    type="checkbox"
                    value={red.value}
                    onChange={handleRed}
                    checked={red.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={red.checked} />
                  <span>красный</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer">
                  <input
                    type="checkbox"
                    value={blue.value}
                    onChange={handleBlue}
                    checked={blue.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={blue.checked} />
                  <span>синий</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer">
                  <input
                    type="checkbox"
                    value={green.value}
                    onChange={handleGreen}
                    checked={green.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={green.checked} />
                  <span>зеленый</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer">
                  <input
                    type="checkbox"
                    value={yellow.value}
                    onChange={handleYellow}
                    checked={yellow.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={yellow.checked} />
                  <span>желтый</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer">
                  <input
                    type="checkbox"
                    value={black.value}
                    onChange={handleBlack}
                    checked={black.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={black.checked} />
                  <span>черный</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer">
                  <input
                    type="checkbox"
                    value={orange.value}
                    onChange={handleOrange}
                    checked={orange.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={orange.checked} />
                  <span>оранжевый</span>
                </label>
                <div className="text-gcE5">634</div>
              </div>
              <div className="flex justify-between items-center ">
                <label className="flex gap-[15px] cursor-pointer">
                  <input
                    type="checkbox"
                    value={gray.value}
                    onChange={handleGray}
                    checked={gray.checked}
                    className="hidden"
                  />
                  <CheckBoxRadio checked={gray.checked} />
                  <span>серый</span>
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

export default SortColor;
