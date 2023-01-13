import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IFilterState, Iitem } from "./types";
import { RootState } from "../store";
import { IitemsSliceState, Status } from "./types";






const initialState: IFilterState = {
  filter: {
    category: "",

  }

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

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.filter.category = action.payload;
    },
  },
  })



export const { setCategory } = filterSlice.actions;

export default filterSlice.reducer;
