import React from "react";

const Footer = () => {
  return (
    <div className="  mt-[80px] bg-gc3 w-full">
      <div className=" flex justify-between py-5 container mx-auto max-w-[1144px] text-gc1">
        <div className="flex gap-x-12">
          <div className="text-gc1 font-bold">
            <button>LOGO</button>
          </div>
          <div>
            <a href="#">О нас</a>
          </div>
          <div>
            <a href="#">Обратная связь</a>
          </div>
        </div>
        <div>
          <span>© 2021 - Все права защищны</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
