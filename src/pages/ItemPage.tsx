import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Axios from "axios";
import { ItemPageLoader } from "../components/ItemPage/Main";
import { Item } from "../components/ItemPage/Main";
import { useMatchMedia } from "./../hooks/use-match-media";
import { useAppDispatch, useAppSelector } from "./../RTK/store";
import { calcTotalPriceAndTotalCount, setCart } from "../RTK/cart/cartSlice";
import GoBackButton from "./../components/ItemPage/GoBackButton";
import { MatchMediaProps } from "../hooks/types";

const ItemPage: React.FC = () => {
  const {} = useAppSelector((state) => state.cartSlice.products);
  const dispatch = useAppDispatch();
  const { isTablet, isDesktop, isMobile }: MatchMediaProps = useMatchMedia();
  const [item, setItems] = React.useState<any>({});
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
          `http://localhost:3001/products/product/${id}`
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

  const goBack = () => navigate(-1);
  const skeleton = <ItemPageLoader />;

  // cartItems Counter
  const { products } = useAppSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(calcTotalPriceAndTotalCount());
  }, [products]);
  //

  return (
    <div className=" flex flex-col justify-center items-center relative max-w-[1144px] mx-auto min-h-100%">
      <GoBackButton />
      {isLoading ? (
        skeleton
      ) : (
        <Item item={item}>
          <div className="flex gap-x-2 items-center justify-between pt-3 text-sm">
            <button className="bg-yellow-300 rounded-md p-2 hover:bg-yellow-400 duration-500">
              Купить
            </button>
            <button
              onClick={() => dispatch(setCart(item))}
              className="bg-yellow-300 rounded-md p-2 hover:bg-yellow-400 duration-500"
            >
              Добавить в корзину
            </button>
          </div>
        </Item>
      )}
    </div>
  );
};

export default ItemPage;
