import React from "react";
import { IProduct } from "../../RTK/cart/types";
import CartItem from "./CartItem";
import { useAppSelector } from "../../RTK/store";

const CartList = () => {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div className="flex flex-col gap-y-4 mx-5 w-full">
      {products.map((obj, i) => (
        <CartItem key={i}>{obj}</CartItem>
      ))}
    </div>
  );
};

export default CartList;
