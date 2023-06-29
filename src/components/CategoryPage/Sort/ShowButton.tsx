import { FC, useEffect, useRef, useState } from "react";
import { PopupClick } from "../../../types/types";

type props = {
  popupName: any;
  children: any;
};

const ShowButton: FC<props> = ({ popupName, children }) => {
  const [show, setShow] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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
      {show && children}
    </div>
  );
};

export default ShowButton;
