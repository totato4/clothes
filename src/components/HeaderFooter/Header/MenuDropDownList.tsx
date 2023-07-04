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
      <ul
        className="grid desktop:grid-cols-4 grid-cols-3 grid-rows-6 
      desktop:mx-auto mx-3 gap-x-[149px] gap-y-5 max-w-[1144px]  h-[202px]
      whitespace-nowrap list-style pl-4 mt-[0px] "
      >
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
