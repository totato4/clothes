import React from "react";
import { BsChatLeftText } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const ShowButton = ({ handleClick, open }: any) => {
  return (
    <div
      className="bg-green-400 w-[55px] h-[55px] rounded-full cursor-pointer flex justify-center items-center z-30"
      onClick={handleClick}
    >
      <div className="text-white">
        {open ? <BsChatLeftText size="1.6em" /> : <RxCross1 size="2em" />}
      </div>
    </div>
  );
};

export default ShowButton;
