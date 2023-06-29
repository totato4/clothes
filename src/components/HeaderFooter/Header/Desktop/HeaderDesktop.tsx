import { useEffect, useRef, useState } from "react";
import { ICategories, PopupClick } from "../../../../types/types";
import { useAppDispatch, useAppSelector } from "../../../../RTK/store";
import HeaderAuth from "./HeaderAuth/HeaderAuth";
import HeaderLOGO from "./HeaderLOGO/HeaderLOGO";
import HeaderDesktopMenu from "./HeaderMenu/HeaderDesktopMenu";
import Search from "./SearchInput/Search";
import HeaderDesktopPopup from "./HeaderMenu/Popup/HeaderDesktopPopup";

const HeaderDesktop = () => {
  const [category, setCategory] = useState<ICategories>({
    name: "empty",
    type: "empty",
    nameFor: "Женщин",
  });

  const [show, setShow] = useState<boolean>(false);

  // const category = useAppSelector((state) => state.filterSlice.filter.category);
  const dispatch = useAppDispatch();

  const MenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  return (
    <div>
      <HeaderAuth />
      <div ref={MenuRef} className="mb-8">
        <div className=" font-montserat max-w-[1140px] mx-auto  select-none relative">
          <div className="flex justify-between items-center pt-5 pb-5 ">
            <HeaderLOGO />
            <HeaderDesktopMenu
              category={category}
              show={show}
              setShow={setShow}
              setCategory={setCategory}
            />
            <Search />
          </div>
          <div className="text-gc2 w-full border-[0.5px] bg-gc2 "></div>
        </div>
        <HeaderDesktopPopup category={category} show={show} setShow={setShow} />
      </div>
    </div>
  );
};

export default HeaderDesktop;
