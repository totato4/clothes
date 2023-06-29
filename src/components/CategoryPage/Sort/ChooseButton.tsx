import React from "react";

const ChooseButton = ({ onChange }: any) => {
  return (
    <input
      type="button"
      value="Применить"
      onClick={onChange}
      className="bg-black2 text-white w-[190px] h-[40px] flex justify-center items-center mx-auto my-5 cursor-pointer"
    />
  );
};

export default ChooseButton;
