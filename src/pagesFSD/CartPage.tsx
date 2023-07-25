import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../RTK/store";
import CartList from "../components/CartPage/CartList";
import { calcTotalPriceAndTotalCount } from "../RTK/cart/cartSlice";
import Button from "./../components/CartPage/Button";
import { clearCart } from "../RTK/cart/cartSlice";
import CartEmpty from "./../components/CartPage/CartEmpty";
import CartButton from "../features/CartButton";

const CartPage = () => {
  const dispatch = useAppDispatch();
  const { products, totalPrice } = useAppSelector((state) => state.cartSlice);
  useEffect(() => {
    dispatch(calcTotalPriceAndTotalCount());
  }, [products]);

  const clearProductCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-full min-h-[500px] flex justify-start items-center flex-col gap-x-6 gap-y-6">
      <>
        {products.length > 0 ? (
          <>
            <CartList />
            <CartButton handleClick={clearProductCart}>
              Очистить корзину
            </CartButton>
            <div className="mr-auto">Общая стоимость: {totalPrice}</div>
          </>
        ) : (
          <CartEmpty />
        )}
      </>
    </div>
  );
};

export default CartPage;
