import React from "react";

const Item = () => {
  return (
    <div className="text-black2 font-medium text-[11px] leading-[13.41px]">
      <div className="relative max-w-[224px] max-h-[340px]">
        <img src="img/w1.jpg" alt="" />
        <div className="absolute bottom-2 right-2 py-[5px] px-[10px] text-white bg-yc1">
          -43%
        </div>
      </div>
      <span className="text-[10px] leading-[12.19px]">Кожаная куртка</span>
      <div className="flex gap-2">
        <span>9 890 ₽</span>
        <span>4 890 ₽</span>
      </div>
    </div>
  );
};

export default Item;
