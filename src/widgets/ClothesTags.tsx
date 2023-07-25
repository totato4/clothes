import React from "react";
import { filterTagsArray } from "../Constants/Constants";

const ClothesTags = () => {
  return (
    <>
      {filterTagsArray.map((obj, i) => (
        <div
          key={i}
          className={`
              
              } text-[11px] leading-[13.41px] font-normal text-gc1 flex`}
        >
          <button className="">{obj}</button>
        </div>
      ))}
    </>
  );
};

export default ClothesTags;
