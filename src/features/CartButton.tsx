import React from "react";

type props = {
  children: string;
  handleClick: () => void;
};

const CartButton: React.FC<props> = ({ children, handleClick }) => {
  return (
    <button
      onClick={() => handleClick()}
      className="active:bg-slate-400 rounded p-2 border-black   flex justify-center items-center bg-slate-400"
    >
      {children}
    </button>
  );
};

export default CartButton;
