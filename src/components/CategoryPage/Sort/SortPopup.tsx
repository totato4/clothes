import React from "react";

const SortPopup = ({ children }: any) => {
  return (
    <div className="flex flex-col z-20 absolute bottom-0 right-0 translate-x-[0%] translate-y-[100%] w-[230px] bg-white shadow-md ">
      {children}
    </div>
  );
};

export default SortPopup;
