import React from "react";
import Navigate from "./Navigate";
import Item from "./../Item";
import { useAppSelector } from "./../../RTK/store";
import { Iitem } from "./../../RTK/asyncThunk/types";
import { useAppDispatch } from "./../../RTK/store";
import { fetchItems } from "./../../RTK/asyncThunk/items";
import {
  filterBrandSelector,
  filterColorSelector,
  filterPageSelector,
  filterQuerySelector,
  filterSizeSelector,
  filterPriceSelector,
} from "./../../RTK/filter/selectors";
import { useSearchParams, useParams } from "react-router-dom";
import {
  setBrand,
  setCategoryClothes,
  setCategoryHuman,
  setColor,
  setPage,
  setQuery,
  setSize,
} from "../../RTK/filter/filterSlice";

interface paramsProp {
  search?: string;
  size?: string;
  brand?: string;
  color?: string;
  clothes?: string;
  human?: string;
}

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

  React.useEffect(() => {
    dispatch(setQuery(searchQuery));
    dispatch(setBrand(brandQuery));
    dispatch(setSize(sizeQuery));
    dispatch(setColor(colorQuery));
    // @ts-ignore
    dispatch(setPage(Number(pageQuery)));
    dispatch(setCategoryClothes(clothesQuery));
    dispatch(setCategoryHuman(humanQuery));
  }, [
    searchQuery,
    brandQuery,
    sizeQuery,
    colorQuery,
    pageQuery,
    clothesQuery,
    humanQuery,
  ]);

  // ALL SELECTORS

  const items = useAppSelector((state) => state.itemsSlice.items);
  const { clothes, humanCategory } = useAppSelector(
    (state) => state.filterSlice.filter.category
  );
  let clothesLink = clothes;
  let humanCategoryLink = humanCategory;

  const brandLink = useAppSelector(filterBrandSelector);
  const sizeLink = useAppSelector(filterSizeSelector);
  const colorLink = useAppSelector(filterColorSelector);
  const pageLink = useAppSelector(filterPageSelector);
  const queryLink = useAppSelector(filterQuerySelector);
  const priceLink = useAppSelector(filterPriceSelector);
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
  ]);

  return (
    <div className="flex flex-wrap gap-x-[5px] gap-y-[30px]">
      {items.length !== 0 ? (
        items.map((obj: Iitem, i) => (
          <Item
            key={obj.id}
            {...obj}
            // imageURL={obj.imageURL}
            // price={obj.price}
            // discount={obj.discount}
            // clothesCategory={obj.clothesCategory}
          />
        ))
      ) : (
        <div className="text-lg font-semibold h-[500px] flex items-center justify-center mx-auto">
          {" "}
          Товаров по запросу не найдено..
        </div>
      )}
    </div>
  );
};

export default CategoryContent;
