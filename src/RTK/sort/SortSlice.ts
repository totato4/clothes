import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { ISort, SortPriceType } from "./types";






const initialState: ISort = {
  color: [],
  size: [],
  brand: [],
  price: [-1, 100001]

  // showModal: false,
};

// interface fetchItemsProps {
//   sortBy: string;
//   order: string;
//   category: string;
//   search: string;
//   currentPage: number;
// }

// Record<string, string> 


// export const fetchItems = createAsyncThunk<Iitem[], Record<string, string> >(
//   `@items/fetchItems`,
//   async (params) => {
//     // const { sortBy, order, category, search, currentPage } = params;
//     const { data } = await axios.get<Iitem[]>(
//       ``
//     );

//     return data;
//   }

  // async (params, thunkAPI) => {
  //   const { sortBy, order, category, search, currentPage } = params;
  //   const { data } = await axios.get(
  //     `https://62d3875781cb1ecafa6e118b.mockapi.io/pizza/items?${search}&${category}&sortBy=${sortBy}&order=${order}&page=${currentPage}&limit=8`
  //   );
  //   if (data.length === 0) {
  //     return thunkAPI.rejectWithValue("Товары по запросу не найдены");
  //   }
  //   return thunkAPI.fulfillWithValue(data);
  // }
// );

export const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setColor(state, action: PayloadAction<string[]>) {
      state.color = action.payload;
    },
    setSize(state, action: PayloadAction<string[]>) {
      state.size = action.payload;
    },
    setBrand(state, action: PayloadAction<string[]>) {
      state.brand = action.payload;
    },
    setPrice(state, action: PayloadAction<SortPriceType >) {
      state.price = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(
  //     fetchItems.pending, (state) => {
  //     state.status = Status.LOADING;
  //     state.items = [];
  //   })
  //   builder.addCase(
  //     fetchItems.fulfilled, (state, action) => {
  //     state.items = action.payload;
  //       state.status = Status.SUCCESS;
      
  //   })
  //   builder.addCase(
  //     fetchItems.rejected, (state) => {
  //     state.status = Status.ERROR;
  //       state.items = [];
     
  //   })
  // },
});



export const { setColor, setBrand, setSize, setPrice } = sortSlice.actions;

export default sortSlice.reducer;
