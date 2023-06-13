import { RootState } from "../store";


export const filterSelector = (state: RootState) => state.filterSlice;
export const filterClothesSelector = (state: RootState) => state.filterSlice.filter.category.clothes;
export const filterHumanCategorySelector = (state: RootState) => state.filterSlice.filter.category.humanCategory;
export const filterColorSelector = (state: RootState) => state.filterSlice.filter.color;
export const filterBrandSelector = (state: RootState) => state.filterSlice.filter.brand;
export const filterSizeSelector = (state: RootState) => state.filterSlice.filter.size;
export const filterPriceSelector = (state: RootState) => state.filterSlice.filter.price;
export const filterQuerySelector = (state: RootState) => state.filterSlice.filter.query;
export const filterDiscountSelector = (state: RootState) => state.filterSlice.filter.discount;