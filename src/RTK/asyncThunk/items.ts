import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IResponseProduct, Status } from './types';
import {IProduct} from '../cart/types'
import axios  from 'axios';
import { IitemsSliceState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

type paramsProps = {
  id: number;
  imageURL: string;
    humanCategoryLink: string;
    clothesLink: string;
    brandLink: string;
  priceLink: [number, number];
  sizeLink: string;
  colorLink: string;
  pageLink: number;
  queryLink: string;
  rating: number;
  discountLink: string;
  
}


export const fetchItems = createAsyncThunk<IResponseProduct, Partial<paramsProps>>(
  `@items/fetchItems`,

  async (params, {fulfillWithValue, rejectWithValue, dispatch}) => {
    const { clothesLink, humanCategoryLink, brandLink, colorLink, sizeLink, pageLink, queryLink, priceLink, discountLink } = params;
    const clothes = clothesLink ? `&clothesCategory=${clothesLink}` : '';
    const humanCategory = humanCategoryLink ? `humanCategory=${humanCategoryLink}` : '';
    // const brand = brandLink?.length !== 0 ? `&brand=${brandLink}` : '';
    const brand = brandLink ? `&brand=${brandLink}` : '';
    const color = colorLink && colorLink.length !== 0 ? `&color=${colorLink.toLowerCase()}` : '';
    const size = sizeLink && sizeLink.length !== 0 ? `&size=${sizeLink}` : '';
    const page = pageLink ? `&page=${pageLink}&limit=20` : `&page=1&limit=20`;
    const query = queryLink && queryLink.length !== 0 ? `&title=${queryLink}` : '';
    const discount = discountLink ? `&discount=discount` : "";
    

    const fetchItemsURL = "http://localhost:3001/products?"

    const { data, status } = await axios.get(fetchItemsURL + humanCategory + clothes + brand + color + size + page + query + discount)
    dispatch(setCountPages(data.totalPages))
      
    if (status < 200 || status >= 300) {
      return rejectWithValue(status)
      
    } else {
      // return fulfillWithValue(data.items.filter((obj: any) => priceLink && obj.price > priceLink[0] && obj.price < priceLink[1]))
      return fulfillWithValue(data)
    }
  }
);


type Iparam = string | undefined

export const fetchItem = createAsyncThunk<IProduct,  Iparam, {rejectValue: string}>(
  `@items/fetchItem`,
  async (params, { fulfillWithValue, rejectWithValue }) => {

    const fetchItemURL = `http://localhost:3001/products?`
    
    // await axios.get(fetchItemURL, {
    //   params: {
    //     id: params
    //   }
    // })
    //   .then((response) => {
    //   return  fulfillWithValue(response.data)
    //   }).catch((error) => {
    //   return  rejectWithValue("Не удалось загрузить товар")
    //   })
    try {
      const { data, status } = await axios.get(fetchItemURL, {
        params: {
          id: params
        }
      }
      
)
      if (status === 200) {
        
        return fulfillWithValue(data)
      }
        
      
    } catch (e) {
      return  rejectWithValue("Не удалось загрузить товар")
    }
     
  }
)





const initialState: IitemsSliceState = {
  products: [],
  countPages: 10,
  countProducts: 0,
  currentPage: 1,
  itemPage: {},
  status: Status.LOADING, 
  itemPageStatus: Status.LOADING,

  // showModal: false,
};


export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
      setCountPages(state, action: PayloadAction<number>) {
      state.countPages = action.payload;
      if(state.currentPage > state.countPages) {
        state.currentPage = state.countPages
      }
    },
    setCurrentPages(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
      
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.products = [];
    })
    builder.addCase(
      fetchItems.fulfilled, (state, action) => {
      state.products = action.payload.products;
        state.status = Status.SUCCESS;
      state.countProducts = action.payload.count
      
    })
    builder.addCase(
      fetchItems.rejected, (state, action) => {
      state.status = Status.ERROR;
        state.products = [];
      console.log(action.error.message)
     
    })
    builder.addCase(
      fetchItem.pending, (state) => {
        state.itemPageStatus = Status.LOADING;
        state.itemPage = {};
      }
    )
    builder.addCase(
      fetchItem.fulfilled, (state, action) => {
        state.itemPageStatus = Status.SUCCESS;
        state.itemPage = action.payload
      }
    )
    builder.addCase(
      fetchItem.rejected, (state, action) => {
        state.itemPageStatus = Status.ERROR;
        console.log(action.error.message)
      }
    )
  },
});

export const {setCurrentPages, setCountPages} = itemsSlice.actions


export default itemsSlice.reducer;