import React from "react";
import { IProduct } from "../../RTK/cart/types";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useAppDispatch } from "../../RTK/store";
import { minusItem, plusItem, removeCart } from "../../RTK/cart/cartSlice";
import RadioButton from "./RadioButton";
type props = {
  children: IProduct;
};

const CartItem: React.FC<props> = ({ children }) => {
  const { id, title, discount, price, imageURL, count, humanCategory } =
    children;
  const discountedPrice = Math.ceil(price - (discount / 100) * price);
  const dispatch = useAppDispatch();
  const removeCard = () => {
    dispatch(removeCart(id));
  };

  const img = (
    <Link key={id} to={`/Item/${id}`}>
      <div className="relative max-h-[100px] select-none">
        {humanCategory === "woman" && (
          <img
            className="h-[100px]"
            src={`../img/w${imageURL && imageURL[4]}.jpg`}
            alt=""
          />
        )}
        {humanCategory === "man" && (
          <img
            className="h-[100px]"
            src={`../img/m${imageURL && imageURL[4]}.jpg`}
            alt=""
          />
        )}
        {humanCategory === "kid" && (
          <img
            className="h-[100px]"
            src={`../img/k${imageURL && imageURL[4]}.jpg`}
            alt=""
          />
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
  );

  return (
    <div className="w-[500px] border-black border-[1px] rounded-md flex justify-between p-10">
      <div className="flex">
        <div>{img}</div>
        <div className="mx-2 my-auto">
          <div className="">{title}</div>
          <div>{discountedPrice}</div>
        </div>
      </div>
      <div className=" pr-4 my-auto">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div className="flex items-center justify-center gap-x-1">
            <div onClick={() => dispatch(minusItem(id))}>
              <RadioButton>-</RadioButton>
            </div>
            <div>{count}</div>{" "}
            <div onClick={() => dispatch(plusItem(id))}>
              <RadioButton>+</RadioButton>
            </div>
          </div>
          <div className="text-xs">
            <Button handleClick={removeCard}>Убрать товар</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
