import React from "react";

type props = { checked: boolean };

const CheckBoxRadio: React.FC<props> = ({ checked }) => {
  return (
    <div
      className={`${
        checked
          ? "w-[17px] h-[17px] border rounded-[50%] border-yc1 flex items-center justify-center "
          : "w-[17px] h-[17px] border rounded-[50%] border-gcE5 flex items-center justify-center"
      }`}
    >
      <div className={`${checked && "w-[9px] h-[9px] bg-yc1 rounded-[50%]"}`} />
    </div>
  );
};

export default CheckBoxRadio;
