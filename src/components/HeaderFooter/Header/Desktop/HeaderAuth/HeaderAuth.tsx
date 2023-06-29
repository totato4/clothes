import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../RTK/store";
import { setClearAuth } from "../../../../../RTK/auth/auth";
import CartButton from "../CartButton/CartButton";

const HeaderAuth = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector((state) => state.authSlice.email);
  const navigate = useNavigate();
  return (
    <div className="font-montserat max-w-[1140px] mx-auto  select-none flex justify-end">
      <div className="flex gap-x-2 justify-center items-center">
        <AiOutlineHome />
        <div
          onClick={() =>
            email ? dispatch(setClearAuth()) : navigate("/Login")
          }
        >
          {email ? email : "Войти"}
        </div>
      </div>
      <CartButton />
    </div>
  );
};

export default HeaderAuth;
