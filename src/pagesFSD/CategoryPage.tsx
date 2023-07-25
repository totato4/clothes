import Header from "../components/CategoryPage/Header";
import Left from "../components/CategoryPage/Left";
import Content from "../components/CategoryPage/Content";
import { useMatchMedia } from "../hooks";
import { MatchMediaProps } from "../hooks/types";
import Navigate from "../components/CategoryPage/Navigate";
import Footer from "../components/CategoryPage/Footer";

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
          <div>
            <Header />
            <Content />
            <Navigate />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
