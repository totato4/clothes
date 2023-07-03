import { ReactNode } from "react";

const MenuList = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex mx-auto align-middle desktop:[&>*:nth-child(2)]:ml-[59px] desktop:[&>*:nth-child(2)]:mr-[80px] desktop:ml-[273px] desktop:gap-x-0 gap-x-4 font-normal text-[16px] leading-[19.5px] ">
      {children}
    </div>
  );
};

export default MenuList;
