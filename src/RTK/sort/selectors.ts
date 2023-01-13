import { RootState } from "../store";


// export const itemsSelector = (state: RootState) => state.itemsSlice;
export const sortSelector = (state: RootState) => state
export const sortColorSelector = (state: RootState) => state.sortSlice.color;
export const sortBrandSelector = (state: RootState) => state.sortSlice.brand;
export const sortSizeSelector = (state: RootState) => state.sortSlice.size;
export const sortPriceSelector = (state: RootState) => state.sortSlice.price;