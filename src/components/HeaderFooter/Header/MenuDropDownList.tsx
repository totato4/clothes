import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface props {
  children: string[];
  forHuman: string;
  handleChange: (obj: any) => void;
}

const MenuDropDownList: FC<props> = ({ children, forHuman, handleChange }) => {
  return (
    <nav className="w-screen">
      <ul className="grid grid-cols-4 grid-rows-6 mt-[30px] gap-x-[149px] gap-y-5 max-w-[1144px] mx-auto h-[202px] whitespace-nowrap list-style pl-4">
        {children.map((obj, i) => (
          <li
            className="before:absolute relative before:-left-[16px] before:top-[60%] before:w-[6px] before:h-[6px] before:bg-[#F8991D] hover:text-orange-300"
            key={obj + i}
            onClick={() => handleChange(obj)}
          >
            <Link
              to={`/category?human=${forHuman}&clothes=${obj}`}
              className="cursor-pointer"
            >
              {obj}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuDropDownList;
