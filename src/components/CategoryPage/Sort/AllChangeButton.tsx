import React from "react";

const AllChangeButton = ({ onChange }: any) => {
  return (
    <label className="my-5 mr-5 ml-auto cursor-pointer">
      <span className={"font-medium text-yc1 underline select-none"}>
        <div onClick={() => onChange("")}>Выбрать все</div>
      </span>
    </label>
  );
};

export default AllChangeButton;
