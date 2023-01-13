import React from "react";
import Left from "../components/CategoryPage/Left";
import Main from "../components/CategoryPage/Main";

const CategoryPage = () => {
  const refCategory = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <div ref={refCategory} className="max-w-[1144px] min-h-screen mx-auto">
        <div className="grid grid-cols-Category1 gap-10">
          <Left />
          <Main />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
