import { ReactNode } from "react";

const MenuItem = ({
  children,
  name,
  pl,
  pr,
}: {
  children: ReactNode;
  name: string;
  pl?: string;
  pr?: string;
}) => {
  return (
    <li
      className={`group list-none  h-[70px] w-full flex justify-center items-center pt-[26px] pb-[24px] desktop:pl-[${pl}] desktop:pr-[${pr}]`}
    >
      <span className="hover:text-yc1 cursor-pointer transition duration-100 font-normal text-[16px] leading-[19.5px] ">
        {name}
      </span>
      <div className="group-hover:visible visible">{children}</div>
    </li>
  );
};

export default MenuItem;
