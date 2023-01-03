import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Iitem } from "./types";
import { RootState } from "../store";
import { IitemsSliceState, Status } from "./types";






const initialState: IitemsSliceState = {
  items: [],
  status: Status.LOADING, 

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


export const fetchItems = createAsyncThunk<Iitem[], Record<string, string> >(
  `@items/fetchItems`,
  async (params) => {
    // const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get<Iitem[]>(
      ``
    );

    return data;
  }

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
);

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Iitem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    })
    builder.addCase(
      fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
        state.status = Status.SUCCESS;
      
    })
    builder.addCase(
      fetchItems.rejected, (state) => {
      state.status = Status.ERROR;
        state.items = [];
     
    })
  },
});



export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
