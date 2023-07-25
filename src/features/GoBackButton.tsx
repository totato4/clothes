import React from "react";
import { useNavigate } from "react-router-dom";
import { MatchMediaProps } from "../hooks/types";
import { useMatchMedia } from "../hooks";

const GoBackButton = () => {
  const navigate = useNavigate();
  const { isMobile }: MatchMediaProps = useMatchMedia();
  return (
    <button
      onClick={() => navigate(-1)}
      className={`${
        isMobile ? "mb-[20px] " : "mb-[50px] mr-auto ml-[20px] "
      } rounded-sm whitespace-nowrap hover:text-orange-400 transition duration-150`}
    >
      Вернуться назад
    </button>
  );
};

export default GoBackButton;
