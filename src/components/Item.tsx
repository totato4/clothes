import { spawn } from "child_process";
import React from "react";
import { Iitem } from "./../RTK/asyncThunk/types";
import { Link } from "react-router-dom";

type props = {
  name: string;
  price: number;
  discount: number;
  imageURL: string;
};

const Item: React.FC<Iitem> = ({
  id,
  price,
  clothesCategory,
  discount,
  imageURL,
  humanCategory,
}) => {
  return (
    <div className="text-black2  font-medium text-[11px] leading-[13.41px]">
      <Link key={id} to={`/Item/${id}`}>
        <div className="relative max-w-[224px] max-h-[340px] select-none">
          {humanCategory == "woman" && (
            <img src={`../img/w${imageURL && imageURL[4]}.jpg`} alt="" />
          )}
          {humanCategory == "man" && (
            <img src={`../img/m${imageURL && imageURL[4]}.jpg`} alt="" />
          )}
          {humanCategory == "kid" && (
            <img src={`../img/k${imageURL && imageURL[4]}.jpg`} alt="" />
          )}
          {discount ? (
            <div className="absolute bottom-2 right-2 py-[5px] px-[10px] text-white bg-yc1">
              {`-${discount}%`}
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
      <span className="text-[10px] leading-[12.19px]">{clothesCategory}</span>
      <div className="flex gap-2">
        <span className={`${discount !== 0 && discount ? "line-through" : ""}`}>
          {price} ₽
        </span>
        {discount !== 0 && discount && price ? (
          <span className="text-yc1">
            {Math.round(price - (discount / 100) * price)} ₽
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Item;
