import React from "react";
import { IProduct } from "../../../RTK/cart/types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../RTK/store";
import { setCart } from "../../../RTK/cart/cartSlice";

type MyIitem = IProduct | imageURL;
type imageURL = { imageURL: string | undefined };
type props = {
  item: IProduct;
  children?: any;
};

const Item: React.FC<props> = ({ item, children }) => {
  const dispatch = useAppDispatch();
  const { id, price, clothesCategory, discount, imageURL, humanCategory } =
    item;

  return (
    <div className="text-black2  font-medium text-[11px] leading-[13.41px] flex flex-col gap-y-[5px]">
      <Link key={id} to={`/Item/${id}`}>
        <div className="relative max-w-[224px] max-h-[340px] select-none">
          {humanCategory === "woman" && (
            <img src={`../img/w${imageURL && imageURL[4]}.jpg`} alt="" />
          )}
          {humanCategory === "man" && (
            <img src={`../img/m${imageURL && imageURL[4]}.jpg`} alt="" />
          )}
          {humanCategory === "kid" && (
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
      <div className="flex  gap-2">
        <span className={`${discount !== 0 && discount ? "line-through" : ""}`}>
          {price} ₽
        </span>
        {discount !== 0 && discount && price ? (
          <span className="text-yc1">
            {Math.ceil(price - (discount / 100) * price)} ₽
          </span>
        ) : (
          ""
        )}
      </div>
      {children}
    </div>
  );
};

export default Item;
