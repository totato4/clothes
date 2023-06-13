import React from "react";
import { Item } from "./../ItemPage/Main";
import { useAppSelector } from "./../../RTK/store";
import {
  setBrand,
  setCategoryClothes,
  setCategoryHuman,
  setColor,
  setDiscount,
  setPage,
  setQuery,
  setSize,
} from "../../RTK/filter/filterSlice";
import { IProduct } from "./../../RTK/cart/types";
import { useAppDispatch } from "./../../RTK/store";
import { fetchItems } from "./../../RTK/asyncThunk/items";
import {
  filterBrandSelector,
  filterColorSelector,
  filterQuerySelector,
  filterSizeSelector,
  filterPriceSelector,
  filterDiscountSelector,
} from "./../../RTK/filter/selectors";
import { useSearchParams } from "react-router-dom";

import ItemPageLoader from "./../ItemPage/Main/ItemPageLoader";
import ResetBtn from "../ItemPage/Main/ResetBtn";

const CategoryContent: React.FC = () => {
  const dispatch = useAppDispatch();

  // Routing
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const brandQuery = searchParams.get("brand") || "";
  const sizeQuery = searchParams.get("size") || "";
  const colorQuery = searchParams.get("color") || "";
  const pageQuery = searchParams.get("page") || "";
  // const priceQuery = searchParams.get("pri") || "";
  const clothesQuery = searchParams.get("clothes") || "";
  const humanQuery = searchParams.get("human") || "";
  const discountQuery = searchParams.get("discount") || "";

  React.useEffect(() => {
    dispatch(setQuery(searchQuery));
    dispatch(setBrand(brandQuery));
    dispatch(setSize(sizeQuery));
    dispatch(setColor(colorQuery));

    dispatch(setPage(Number(pageQuery)));
    dispatch(setCategoryClothes(clothesQuery));
    dispatch(setCategoryHuman(humanQuery));
    dispatch(setDiscount(discountQuery));
  }, [
    searchQuery,
    brandQuery,
    sizeQuery,
    colorQuery,
    pageQuery,
    clothesQuery,
    humanQuery,
    discountQuery,
  ]);

  // ALL SELECTORS

  const products = useAppSelector((state) => state.itemsSlice.products);
  const status = useAppSelector((state) => state.itemsSlice.status);
  const { clothes, humanCategory } = useAppSelector(
    (state) => state.filterSlice.filter.category
  );
  let clothesLink = clothes;
  let humanCategoryLink = humanCategory;

  const brandLink = useAppSelector(filterBrandSelector);
  const sizeLink = useAppSelector(filterSizeSelector);
  const colorLink = useAppSelector(filterColorSelector);
  const pageLink = useAppSelector((state) => state.itemsSlice.currentPage);
  const queryLink = useAppSelector(filterQuerySelector);
  const priceLink = useAppSelector(filterPriceSelector);
  const discountLink = useAppSelector(filterDiscountSelector);
  //

  React.useEffect(() => {
    const params = {};
    // @ts-ignore
    if (queryLink.length > 0) params.search = queryLink;
    // @ts-ignore
    if (sizeLink.length > 0) params.size = sizeLink;
    // @ts-ignore
    if (brandLink.length > 0) params.brand = brandLink;
    // @ts-ignore
    if (colorLink.length > 0) params.color = colorLink;
    // @ts-ignore
    if (clothes.length > 0) params.clothes = clothes;
    // @ts-ignore
    if (humanCategoryLink.length > 0) params.human = humanCategory;
    // @ts-ignore
    if (pageLink > 0) params.page = pageLink;
    // @ts-ignore
    if (discountLink.length > 0) params.discount = discountLink;

    setSearchParams(params);

    dispatch(
      fetchItems({
        clothesLink,
        humanCategoryLink,
        brandLink,
        sizeLink,
        colorLink,
        pageLink,
        queryLink,
        priceLink,
        discountLink,
      })
    );
  }, [
    clothes,
    humanCategory,
    brandLink,
    sizeLink,
    colorLink,
    pageLink,
    queryLink,
    priceLink,
    discountLink,
  ]);

  // Render Components

  const successBlock = products.map((obj, i) =>
    products.length !== 0 ? (
      <Item key={obj.id} item={obj} />
    ) : (
      <div>Товары данной категории отсутствуют</div>
    )
  );
  // console.log(products);
  // const successBlock = <div>kontent</div>;
  const loadingBlock = [...new Array(8)].map((_, index) => (
    <ItemPageLoader key={index} />
  ));
  const errorBlock = (
    <div className="m-auto max-h-300px max-w-300px">
      <ResetBtn />
    </div>
  );

  return (
    <div className="flex flex-wrap gap-x-[5px] gap-y-[30px] min-h-[500px] ">
      {status === "loading" && loadingBlock}
      {status === "success" && successBlock}
      {status === "error" && errorBlock}
    </div>
  );
};

export default CategoryContent;
