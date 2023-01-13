import React from "react";
import Navigate from "./Navigate";
import Item from "./../Item";

const Array = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const CategoryContent = () => {
  return (
    <div className="flex flex-wrap gap-x-[5px] gap-y-[30px]">
      {Array.map((obj, i) => (
        <Item key={i + 0} />
      ))}
    </div>
  );
};

export default CategoryContent;
