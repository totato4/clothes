import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import { ItemPageLoader } from "../components/ItemPage/Main";
import { Item } from "../components/ItemPage/Main";
import { useMatchMedia } from "./../hooks/use-match-media";
import { fetchItem } from "../RTK/asyncThunk/items";
import { useAppDispatch, useAppSelector } from "./../RTK/store";

const ItemPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isTablet, isDesktop, isMobile }: any = useMatchMedia();
  const [item, setItems] = React.useState<any>([{}]);
  const [isLoading, setIsLoading] = React.useState(true);
  // const isLoading = useAppSelector((state) => state.itemsSlice.itemPageStatus);
  // const item = useAppSelector((state) => state.itemsSlice.itemPage);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchItem() {
      setIsLoading(true);
      try {
        const { data } = await Axios.get(
          `http://localhost:3001/items?id=` + id
        );
        setIsLoading(false);
        setItems(data);

        console.log(data);
      } catch (error) {
        alert("ошибка при загрузке страницы");
        navigate("/");
        setIsLoading(false);
      }
    }
    fetchItem();
  }, []);

  // React.useEffect(() => {
  //   dispatch(fetchItem(id));
  //   console.log(item);
  // }, []);

  const goBack = () => navigate(-1);
  const mapItems = <Item {...item[0]} />;
  const skeleton = <ItemPageLoader />;

  return (
    <div className=" flex flex-col justify-center items-center relative max-w-[1144px] mx-auto min-h-100%">
      <button
        onClick={goBack}
        className={`${
          isMobile ? "mb-[20px] " : "mb-[50px] mr-auto ml-[20px] "
        } rounded-sm whitespace-nowrap hover:text-orange-400 transition duration-150`}
      >
        Вернуться назад
      </button>
      {isLoading ? skeleton : mapItems}
    </div>
  );
};

export default ItemPage;
