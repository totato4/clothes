import React from "react";
import { useAppSelector } from "../RTK/store";
import CartItem from "../components/CartPage/CartItem";

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
