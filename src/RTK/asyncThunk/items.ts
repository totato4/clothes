import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Iitem, Status } from './types';
import axios  from 'axios';
import { IitemsSliceState } from './types';
import { useAppDispatch } from '../store';
import { setPageQty } from '../filter/filterSlice';

type paramsProps = {
  id?: string;
  imageURL?: string;
    humanCategoryLink?: string;
    clothesLink?: string;
    brandLink?: string;
  priceLink: [number, number];
  sizeLink?: string;
  colorLink?: string;
  pageLink?: number;
  queryLink?: string;
  rating?: number;
  discount?: number;
  
}


export const fetchItems = createAsyncThunk<Iitem[], paramsProps>(
  `@items/fetchItems`,

  async (params, thunkAPI) => {
    const { clothesLink, humanCategoryLink, brandLink, colorLink, sizeLink, pageLink, queryLink, priceLink } = params;
    const clothes = clothesLink ? `&clothesCategory=${clothesLink}` : '';
    const humanCategory = humanCategoryLink ? `humanCategory=${humanCategoryLink}` : '';
    const brand = brandLink?.length !== 0 ? `&brand=${brandLink}` : '';
    const color = colorLink && colorLink.length !== 0 ? `&color=${colorLink}` : '';
    const size = sizeLink && sizeLink.length !== 0 ? `&size=${sizeLink}` : '';
    const page = `&_page=${pageLink}&_limit=20`;
    const query = queryLink && queryLink.length !== 0 ? `&q=${queryLink}` : '';
    
    const returnResult = (data: any) => {
  return data.filter((obj: any) => obj.price > priceLink[0] && obj.price < priceLink[1])
}


    const { data } = await axios.get(
      `http://localhost:3001/items?${humanCategory}${clothes}${brand}${color}${size}${page}${query}`

      // ${colorLink && colorLink.length == 0 && colorLink.length > 1 ? "" : `&color=${colorLink}`}
      // ${sizeLink && sizeLink.length == 0 && sizeLink.length > 1 ? "" : `&color=${sizeLink}`}
    );
    if (data.length === 0) {
      return thunkAPI.rejectWithValue("Товары по запросу не найдены");
    }
      
    return (
      returnResult(data)
        // thunkAPI.fulfillWithValue(data)
      )
      
      
    
  }
);




const initialState: IitemsSliceState = {
  items: [],
  status: Status.LOADING, 

  // showModal: false,
};


export const itemsSlice = createSlice({
  name: "items",
  initialState,
    reducers: {
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



export const {  } = itemsSlice.actions;

export default itemsSlice.reducer;