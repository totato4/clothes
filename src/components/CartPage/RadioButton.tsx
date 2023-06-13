import React from "react";

type props = {
  children: string;
};

const RadioButton: React.FC<props> = ({ children }) => {
  return (
    <button className="rounded-lg border-black active:bg-black border-[1px] h-[15px] w-[15px] flex justify-center items-center">
      {children}
    </button>
  );
};

export default RadioButton;
