import Left from "../components/CategoryPage/Left";
import Main from "../components/CategoryPage/Main";
import { useMatchMedia } from "../hooks";
import { MatchMediaProps } from "../hooks/types";

const CategoryPage = () => {
  const { isMobile, isTablet, isDesktop }: MatchMediaProps = useMatchMedia();

  return (
    <>
      <div
        className={`${
          isMobile && "mt-[90px] max-w-[1144px] min-h-screen mx-auto"
        } ${isTablet && "mt-[90px] max-w-[1144px] min-h-screen mx-auto"}
          ${isDesktop && "mt-[90px] max-w-[1144px] min-h-screen mx-auto"}
          `}
      >
        <div className="grid grid-cols-Category1 gap-10">
          <Left />
          <Main />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
