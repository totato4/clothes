import React from "react";

const Navigate = () => {
  const [button, setButton] = React.useState(false);

  return (
    <div className=" w-full flex justify-end items-center gap-5  text-[14px] leading-[17.07px] font-normal  my-10">
      <div className="flex ">
        <button
          onClick={() => setButton(!button)}
          className={`${
            button && "bg-black2 text-white "
          } w-[38px] h-[50px] border border-gc2 text-center `}
        >
          1
        </button>

        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          2
        </button>
        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          3
        </button>
        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          4
        </button>
        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          5
        </button>
        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          6
        </button>
        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          7
        </button>
        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          8
        </button>
        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          9
        </button>
        <button className="w-[38px] h-[50px] border border-gc2 text-center">
          10
        </button>
      </div>
      <button className="flex items-center gap-2 px-5 py-4 border border-gc2 text-center ">
        Вперед
        <svg
          width="7"
          height="11"
          viewBox="0 0 7 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.27328 11L0.289063 10.0158L4.32062 5.98422L0.289063 1.95266L1.27328 0.968442L6.28906 5.98422L1.27328 11Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navigate;
