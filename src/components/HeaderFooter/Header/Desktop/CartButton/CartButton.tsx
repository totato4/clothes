import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../../RTK/store";

const CartButton = () => {
  const { count } = useAppSelector((state) => state.cartSlice);
  return (
    <div className="flex justify-center items-center ml-4 text-sm">
      <Link to="/Cart">
        <button className="flex items-center justify-center">
          <TiShoppingCart /> {count}
        </button>
      </Link>
    </div>
  );
};

export default CartButton;
