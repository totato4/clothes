import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Iitem, Status } from './types';
import axios  from 'axios';
import { IitemsSliceState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

type paramsProps = {
  id: string;
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
  discount: number;
  
}

type paramsPropsPartial = Partial<paramsProps>;



export const fetchItems = createAsyncThunk<Iitem[], paramsPropsPartial>(
  `@items/fetchItems`,

  async (params, {fulfillWithValue, rejectWithValue, dispatch}) => {
    const { clothesLink, humanCategoryLink, brandLink, colorLink, sizeLink, pageLink, queryLink, priceLink } = params;
    const clothes = clothesLink ? `&clothesCategory=${clothesLink}` : '';
    const humanCategory = humanCategoryLink ? `humanCategory=${humanCategoryLink}` : '';
    const brand = brandLink?.length !== 0 ? `&brand=${brandLink}` : '';
    const color = colorLink && colorLink.length !== 0 ? `&color=${colorLink}` : '';
    const size = sizeLink && sizeLink.length !== 0 ? `&size=${sizeLink}` : '';
    const page = `&_page=${pageLink}&_limit=20`;
    const query = queryLink && queryLink.length !== 0 ? `&q=${queryLink}` : '';
    
    

    const fetchItemsURL = "http://localhost:3001/items?"

    const { data, status, headers } = await axios.get(fetchItemsURL + humanCategory + clothes + brand + color + size + page + query)
    dispatch(setCountPages(Math.ceil(headers["x-total-count"] / 20)))
      
    if (status < 200 || status >= 300) {
      return rejectWithValue(status)
      
    } else {
      return fulfillWithValue(data.filter((obj: any) => priceLink && obj.price > priceLink[0] && obj.price < priceLink[1]))
    }
  }
);


type knowError = {
  errorMessage: string;
}
type Iparam = string | undefined

export const fetchItem = createAsyncThunk<Iitem,  Iparam, {rejectValue: string}>(
  `@items/fetchItem`,
  // @ts-ignore
  async (params, { fulfillWithValue, rejectWithValue }) => {

    const fetchItemURL = `http://localhost:3001/items`
    
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
      const { data, statusText, status } = await axios.get(fetchItemURL, {
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
  items: [],
  countPages: 10,
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
      state.items = [];
    })
    builder.addCase(
      fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
        state.status = Status.SUCCESS;
       
      
    })
    builder.addCase(
      fetchItems.rejected, (state, action) => {
      state.status = Status.ERROR;
        state.items = [];
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