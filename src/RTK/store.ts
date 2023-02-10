import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import filterSlice from "./filter/filterSlice";
import itemsSlice from "./asyncThunk/items";

export const store = configureStore({
  reducer: {
    filterSlice,
    itemsSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector