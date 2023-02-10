import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ICategory, IFilterState, ICategoriesArray, SortPriceType } from "./types";
import { RootState } from "../store";
import { IitemsSliceState, Status } from "./types";


// export const fetchItems = createAsyncThunk<Iitem[], Record<string, string> >(
//   `@filter/fetchItems`,

//   async (params, thunkAPI) => {
//     const {  } = params;
//     const { data } = await axios.get(
//       `http://localhost:3001/items?${humanCategory}&`
//       `https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items?${search}&${category}&sortBy=${sortBy}&order=${order}&page=${currentPage}&limit=8`
//     );
//     if (data.length === 0) {
//       return thunkAPI.rejectWithValue("Товары по запросу не найдены");
//     }
//     return thunkAPI.fulfillWithValue(data);
//   }
// );



const initialState: IFilterState = {
  filter: {
    category: {
      clothes: "",
      humanCategory: "",
    },
    categoriesArray: [],
    color: "",
    size: "",
    brand: "",
    price: [-1, 100001],
    pagination: {
      page: 1,
      pageQty: 10,
    },
    query: "",
    }
  }



export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<ICategory>) {
      state.filter.category = action.payload;
    },
    setCategoryClothes(state, action: PayloadAction<string>) {
      state.filter.category.clothes = action.payload;
    },
    setCategoryHuman(state, action: PayloadAction<string>) {
      state.filter.category.humanCategory = action.payload;
    },
    setCategoriesArray(state, action: PayloadAction<ICategoriesArray>) {
      state.filter.categoriesArray = action.payload
    },
    setColor(state, action: PayloadAction<string>) {
      state.filter.color = action.payload;
    },
    setSize(state, action: PayloadAction<string>) {
      state.filter.size = action.payload;
    },
    setBrand(state, action: PayloadAction<string>) {
      state.filter.brand = action.payload;
    },
    setPrice(state, action: PayloadAction<SortPriceType >) {
      state.filter.price = action.payload;
    },
    setPage(state, action: PayloadAction<number >) {
      state.filter.pagination.page = action.payload;
    },
    setPageQty(state, action: PayloadAction<number>) {
      state.filter.pagination.pageQty = action.payload;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.filter.query = action.payload;
  },
  },
  })



export const { setCategory, setCategoriesArray, setColor, setBrand, setSize, setPrice, setPage, setPageQty, setQuery, setCategoryClothes, setCategoryHuman } = filterSlice.actions;

export default filterSlice.reducer;
