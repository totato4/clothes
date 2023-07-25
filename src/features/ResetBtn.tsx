import React from "react";

const ResetBtn = () => {
  return (
    <div className="grid gap-y-2">
      <div>
        Не удалось загрузить товары...
        <br /> Попробуйте перезагрузить страницу
      </div>
      <button
        className="w-200px h-100px bg-black text-white"
        onClick={() => window.location.reload()}
      >
        Перезагрузить страницу
      </button>
    </div>
  );
};

export default ResetBtn;
