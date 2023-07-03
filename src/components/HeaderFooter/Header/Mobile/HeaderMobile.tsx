import React from "react";
import { useScrollDirection } from "../../../../hooks/useScrollDirection";
import { useAppDispatch } from "../../../../RTK/store";
import {
  setCategoryClothes,
  setCategoryHuman,
} from "../../../../RTK/filter/filterSlice";
import {
  CategoryArr,
  SubCategoryArr,
  humanArray,
} from "../../../../Constants/Constants";
import { Link } from "react-router-dom";
import ButtonBack from "./ButtonBack";

const HeaderMobile = () => {
  const scrollDirection = useScrollDirection();

  React.useEffect(() => {}, [scrollDirection]);

  //
  const dispatch = useAppDispatch();

  const [menuState, setMenuState] = React.useState(1);
  const [showMenu, setShowMenu] = React.useState(false);
  const [humanState, setHumanState] = React.useState("");
  const [categoryState, setCategoryState] = React.useState(0);

  const goBack = () => {
    if (menuState > 1) {
      setMenuState(menuState - 1);
    }
  };

  const humanCategoryChange = (human: string) => {
    setMenuState(2);
    setHumanState(human);
  };

  const CategoryChange = (i: number) => {
    setMenuState(3);
    setCategoryState(i);
  };
  const SubCategoryChange = (obj: string) => {
    dispatch(setCategoryHuman(humanState));
    dispatch(setCategoryClothes(obj));
    setShowMenu(false);
  };

  const HandleShowMenu = () => {
    setMenuState(1);
    setShowMenu(!showMenu);
  };

  const humanComponent = humanArray.map((obj, i) => (
    <li
      className="border-b border-b-gcE5 w-full  flex justify-between px-[20px] font-montserat font-normal text-sm  h-[60px] items-center"
      key={i}
      onClick={() => humanCategoryChange(obj.human)}
    >
      <div className="">{obj.text}</div>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.2998 13L6.2998 7L1.2998 0.999999"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </li>
  ));
  const CategoryComponent = CategoryArr.map((obj, i) => (
    <li
      className="border-b border-b-gcE5 w-full  flex justify-between px-[20px] font-montserat font-normal text-sm  h-[60px] items-center"
      key={i}
      onClick={() => CategoryChange(i)}
    >
      <div>{obj}</div>
      <svg
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.2998 13L6.2998 7L1.2998 0.999999"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </li>
  ));
  const SubCategoryComponent = SubCategoryArr[categoryState].map((obj, i) => (
    <Link key={i} to={`/Category?human=${humanState}&clothes=${obj}`}>
      <li
        className="border-b border-b-gcE5 w-full  flex justify-between px-[20px] font-montserat font-normal text-sm  h-[60px] items-center"
        onClick={() => SubCategoryChange(obj)}
      >
        <div>{obj}</div>
        <div>
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.2998 13L6.2998 7L1.2998 0.999999"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </li>
    </Link>
  ));
  return (
    <div
      className={`
    flex justify-between items-center h-[70px] px-[20px] border-b-[1px] border-b-gcE5 w-full bg-white z-40
    fixed left-0 ${
      scrollDirection === 1 ? "-top-[70px]" : "top-0"
    }  z-40 transition-all duration-150
    `}
    >
      <div className="z-40">
        <Link to="/">
          <svg
            width="60"
            height="16"
            viewBox="0 0 60 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.66 0.999999H3.9V12.36H10.92V15H0.66V0.999999ZM19.2759 15.24C17.8226 15.24 16.5093 14.9267 15.3359 14.3C14.1759 13.6733 13.2626 12.8133 12.5959 11.72C11.9426 10.6133 11.6159 9.37333 11.6159 8C11.6159 6.62667 11.9426 5.39333 12.5959 4.3C13.2626 3.19333 14.1759 2.32667 15.3359 1.7C16.5093 1.07333 17.8226 0.76 19.2759 0.76C20.7293 0.76 22.0359 1.07333 23.1959 1.7C24.3559 2.32667 25.2693 3.19333 25.9359 4.3C26.6026 5.39333 26.9359 6.62667 26.9359 8C26.9359 9.37333 26.6026 10.6133 25.9359 11.72C25.2693 12.8133 24.3559 13.6733 23.1959 14.3C22.0359 14.9267 20.7293 15.24 19.2759 15.24ZM19.2759 12.48C20.1026 12.48 20.8493 12.2933 21.5159 11.92C22.1826 11.5333 22.7026 11 23.0759 10.32C23.4626 9.64 23.6559 8.86667 23.6559 8C23.6559 7.13333 23.4626 6.36 23.0759 5.68C22.7026 5 22.1826 4.47333 21.5159 4.1C20.8493 3.71333 20.1026 3.52 19.2759 3.52C18.4493 3.52 17.7026 3.71333 17.0359 4.1C16.3693 4.47333 15.8426 5 15.4559 5.68C15.0826 6.36 14.8959 7.13333 14.8959 8C14.8959 8.86667 15.0826 9.64 15.4559 10.32C15.8426 11 16.3693 11.5333 17.0359 11.92C17.7026 12.2933 18.4493 12.48 19.2759 12.48ZM38.8309 7.78H41.7909V13.46C41.0309 14.0333 40.1509 14.4733 39.1509 14.78C38.1509 15.0867 37.1443 15.24 36.1309 15.24C34.6776 15.24 33.3709 14.9333 32.2109 14.32C31.0509 13.6933 30.1376 12.8333 29.4709 11.74C28.8176 10.6333 28.4909 9.38667 28.4909 8C28.4909 6.61333 28.8176 5.37333 29.4709 4.28C30.1376 3.17333 31.0576 2.31333 32.2309 1.7C33.4043 1.07333 34.7243 0.76 36.1909 0.76C37.4176 0.76 38.5309 0.966666 39.5309 1.38C40.5309 1.79333 41.3709 2.39333 42.0509 3.18L39.9709 5.1C38.9709 4.04667 37.7643 3.52 36.3509 3.52C35.4576 3.52 34.6643 3.70667 33.9709 4.08C33.2776 4.45333 32.7376 4.98 32.3509 5.66C31.9643 6.34 31.7709 7.12 31.7709 8C31.7709 8.86667 31.9643 9.64 32.3509 10.32C32.7376 11 33.2709 11.5333 33.9509 11.92C34.6443 12.2933 35.4309 12.48 36.3109 12.48C37.2443 12.48 38.0843 12.28 38.8309 11.88V7.78ZM51.5806 15.24C50.1273 15.24 48.814 14.9267 47.6406 14.3C46.4806 13.6733 45.5673 12.8133 44.9006 11.72C44.2473 10.6133 43.9206 9.37333 43.9206 8C43.9206 6.62667 44.2473 5.39333 44.9006 4.3C45.5673 3.19333 46.4806 2.32667 47.6406 1.7C48.814 1.07333 50.1273 0.76 51.5806 0.76C53.034 0.76 54.3406 1.07333 55.5006 1.7C56.6606 2.32667 57.574 3.19333 58.2406 4.3C58.9073 5.39333 59.2406 6.62667 59.2406 8C59.2406 9.37333 58.9073 10.6133 58.2406 11.72C57.574 12.8133 56.6606 13.6733 55.5006 14.3C54.3406 14.9267 53.034 15.24 51.5806 15.24ZM51.5806 12.48C52.4073 12.48 53.154 12.2933 53.8206 11.92C54.4873 11.5333 55.0073 11 55.3806 10.32C55.7673 9.64 55.9606 8.86667 55.9606 8C55.9606 7.13333 55.7673 6.36 55.3806 5.68C55.0073 5 54.4873 4.47333 53.8206 4.1C53.154 3.71333 52.4073 3.52 51.5806 3.52C50.754 3.52 50.0073 3.71333 49.3406 4.1C48.674 4.47333 48.1473 5 47.7606 5.68C47.3873 6.36 47.2006 7.13333 47.2006 8C47.2006 8.86667 47.3873 9.64 47.7606 10.32C48.1473 11 48.674 11.5333 49.3406 11.92C50.0073 12.2933 50.754 12.48 51.5806 12.48Z"
              fill="#F8991D"
            />
          </svg>
        </Link>
      </div>
      {!showMenu && (
        <button className="z-40" onClick={HandleShowMenu}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 19C20 18.45 19.5 18 18.8889 18L1.11111 18C0.5 18 0 18.45 0 19C0 19.55 0.5 20 1.11111 20L18.8889 20C19.5 20 20 19.55 20 19Z"
              fill="black"
            />
            <path
              d="M20 10C20 9.45 19.5 9 18.8889 9L1.11111 9C0.5 9 0 9.45 0 10C0 10.55 0.5 11 1.11111 11L18.8889 11C19.5 11 20 10.55 20 10Z"
              fill="black"
            />
            <path
              d="M20 1C20 0.45 19.5 0 18.8889 0L1.11111 0C0.5 0 0 0.45 0 1C0 1.55 0.5 2 1.11111 2L18.8889 2C19.5 2 20 1.55 20 1Z"
              fill="black"
            />
          </svg>
        </button>
      )}
      {showMenu && (
        <button className="z-40" onClick={HandleShowMenu}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 1.5L13.5 0L7.5 6L1.5 0L0 1.5L6 7.5L0 13.5L1.5 15L7.5 9L13.5 15L15 13.5L9 7.5L15 1.5Z"
              fill="#200E32"
            />
          </svg>
        </button>
      )}
      {
        <div
          className={`${
            showMenu ? "translate-x-[0]" : "translate-x-[100%]"
          } transition-transform duration-300 top-[70px] z-30  absolute  left-0 bg-white w-full h-screen`}
        >
          <div className="flex flex-col list-none  w-full">
            <ButtonBack goBack={goBack} menuState={menuState} />
            {menuState === 1 && humanComponent}
            {menuState === 2 && CategoryComponent}
            {menuState === 3 && SubCategoryComponent}
          </div>
        </div>
      }
    </div>
  );
};

export default HeaderMobile;
