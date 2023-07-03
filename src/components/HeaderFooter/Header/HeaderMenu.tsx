import { ReactNode } from "react";

const HeaderMenu = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-14 align-middle font-normal text-[16px] leading-[19.5px]">
      {children}
    </div>
  );
};

export default HeaderMenu;
