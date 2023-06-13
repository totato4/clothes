import React from "react";
import debounce from "lodash.debounce";
import HeaderDropMenu from "../HeaderDropMenu";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../RTK/store";
import { setCategory, setPage, setQuery } from "../../RTK/filter/filterSlice";
import { PopupClick, ICategories } from "../../types/types";
import { AiOutlineHome } from "react-icons/ai";
import { setClearAuth } from "../../RTK/auth/auth";
import { TiShoppingCart } from "react-icons/ti";

export const categories = [
  { name: "Женщинам", type: "woman", nameFor: "Женская одежда" },
  { name: "Мужчинам", type: "man", nameFor: "Мужская одежда" },
  { name: "Детям", type: "kid", nameFor: "Детская одежда" },
];

const MenuDesktop = () => {
  // AUTH
  const email = useAppSelector((state) => state.authSlice.email);
  const navigate = useNavigate();
  //

  const [category, setCategory] = React.useState<ICategories>({
    name: "empty",
    type: "empty",
    nameFor: "Женщин",
  });

  const [show, setShow] = React.useState<boolean>(false);

  // const category = useAppSelector((state) => state.filterSlice.filter.category);
  const dispatch = useAppDispatch();

  const toggleMenu = (obj: ICategories) => {
    if (category.name == obj.name) {
      setShow(!show);
    } else {
      setCategory(obj);
      setShow(true);
    }
  };

  const MenuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const _event = event as MouseEvent & PopupClick;
      if (MenuRef.current && !_event.composedPath().includes(MenuRef.current)) {
        setShow(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Close Menu onClick dropdownMenuProps
  const dropDownCategory = useAppSelector(
    (state) => state.filterSlice.filter.category.clothes
  );

  // SEARCH

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState("");
  // const Debounce = React.useCallback(
  //   debounce((event) => {
  //     setSearchValue(event.target.value);
  //   }, 1000),
  //   []
  // );
  const isMobile = true;

  // useWhyDidYouUpdate("Search", { searchValue, value, setValue });

  const onClickClear = (e: React.MouseEvent<SVGSVGElement>) => {
    console.log(e);
    dispatch(setQuery(""));
    setValue("");
    inputRef.current?.focus();
    dispatch(setPage(1));
  };
  const updateSearchValue = React.useCallback(
    debounce((str: string) => {
      dispatch(setQuery(str));
      dispatch(setPage(1));
    }, 1000),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(event.target.value);
    setValue(event.target.value);
  };

  // CART
  const { count } = useAppSelector((state) => state.cartSlice);

  return (
    <div>
      <div className="font-montserat max-w-[1140px] mx-auto  select-none flex justify-end">
        <div className="flex gap-x-2 justify-center items-center">
          <AiOutlineHome />{" "}
          <div
            onClick={() =>
              email ? dispatch(setClearAuth()) : navigate("/Login")
            }
          >
            {email ? email : "Войти"}
          </div>
        </div>
        <div className="flex justify-center items-center ml-4 text-sm">
          <Link to="/Cart">
            <button className="flex items-center justify-center">
              <TiShoppingCart /> {count}
            </button>
          </Link>
        </div>
      </div>
      <div ref={MenuRef} className="mb-8">
        <div className=" font-montserat max-w-[1140px] mx-auto  select-none relative">
          <div className="flex justify-between items-center pt-5 pb-5 ">
            <div className="text-yc1 xl:text-[25px] leading-[30.48px] font-bold">
              <Link to={"/"}>LOGO</Link>
            </div>
            <nav>
              <ul className=" flex gap-14 justify-center items-center align-middle font-normal text-[16px] leading-[19.5px]">
                {categories.map((obj, i) => (
                  <li
                    key={i}
                    onClick={() => toggleMenu(obj)}
                    className={
                      category.name === obj.name
                        ? "text-yc1 cursor-pointer transition-colors"
                        : "cursor-pointer hover:text-orange-300 transition duration-100"
                    }
                  >
                    {obj.name}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="font-normal text-[12px] leading-[14.63px] flex items-center justify-center relative w-[188px] h-5">
              {!value && (
                <div className="absolute left-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 7.89217C0 12.2439 3.5472 15.7843 7.90726 15.7843C9.80317 15.7843 11.5454 15.1149 12.9091 14.0004L18.6493 19.7297C18.7226 19.8031 18.8097 19.8613 18.9057 19.901C19.0016 19.9406 19.1045 19.961 19.2083 19.9609C19.3649 19.9613 19.518 19.9152 19.6482 19.8285C19.7785 19.7418 19.88 19.6185 19.9399 19.4742C19.9998 19.3298 20.0154 19.171 19.9846 19.0178C19.9539 18.8646 19.8783 18.7239 19.7674 18.6137L14.0272 12.8845C15.1438 11.5234 15.8145 9.78448 15.8145 7.89217C15.8145 3.54043 12.2673 0 7.90726 0C3.5472 0 0 3.54043 0 7.89217ZM1.58145 7.89217C1.58145 4.41094 4.41937 1.57843 7.90726 1.57843C11.3959 1.57843 14.2331 4.41094 14.2331 7.89217C14.2331 11.3734 11.3951 14.2059 7.90726 14.2059C4.41937 14.2059 1.58145 11.3734 1.58145 7.89217Z"
                      fill="black"
                    />
                  </svg>
                </div>
              )}
              <input
                type="text"
                value={value}
                className=" placeholder:text-gc1 placeholder:font-normal w-[188px] h-[20px] border-white text-[12px] indent-[34px] outline-none focus:outline-none focus:border-white
              shadow-none"
                placeholder="Например: Платье Gucci"
                onChange={(e) => onChangeInput(e)}
              />
              {value && (
                <div className="absolute right-0">
                  <svg
                    onClick={onClickClear}
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6L18 18"
                      stroke="#000000"
                      strokeLinecap="round"
                    />
                    <path
                      d="M18 6L6.00001 18"
                      stroke="#000000"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
          <div className="text-gc2 w-full border-[0.5px] bg-gc2 "></div>
        </div>
        <HeaderDropMenu category={category} show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default MenuDesktop;
