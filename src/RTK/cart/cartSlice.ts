import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ICartState } from "./types";
import { RootState } from "../store";
import { IProduct } from "./types";
import { calcTotalCount, calcTotalPrice } from "../../utils/calcTotalPrice";


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



const initialState: ICartState = {
  products: [],
  totalPrice: 0,
  count: 0,
  }



export const cartSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCart(state, action: PayloadAction<IProduct>) {
      const findProduct = state.products.find((obj) => obj.id === action.payload.id);
      if (findProduct) {
        findProduct.count == undefined ? findProduct.count = 1 : findProduct.count++
      } else {
        state.products.push({
          ...action.payload,
          count: 1,
        })
      }
      
     
    },
    removeCart(state, action: PayloadAction<number>) {

      state.products = state.products.filter((obj) => obj.id != action.payload);
     
    },
    clearCart(state) {
      state.products = [];
      
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.products.find((obj) => obj.id == action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      }
    },
    plusItem(state, action: PayloadAction<number>) {
      const findItem = state.products.find((obj) => obj.id == action.payload);
      if (findItem) {
        findItem.count++;
      }
    },
    calcTotalPriceAndTotalCount(state) {
      state.count = calcTotalCount(state.products)
      state.totalPrice = calcTotalPrice(state.products)
      // state.totalPrice = state.products.reduce((sum, obj) => {

      //   return obj.price * obj.count + sum;
      // }, 0)
    }

  },
  }) 



export const { setCart, removeCart, clearCart, minusItem, plusItem,  calcTotalPriceAndTotalCount} = cartSlice.actions;

export default cartSlice.reducer;
