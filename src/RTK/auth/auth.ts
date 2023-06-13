import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUser, AuthSliceState, Status, Iparams, AuthSliceStatePayload } from './types';
import axios  from 'axios';
import { PayloadAction } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

export const fetchRegister = createAsyncThunk<AuthSliceStatePayload, Iparams>(
  `@auth/register`,

  async (params, { fulfillWithValue }) => {

    const userURL = `http://localhost:3001/auth/register`
    try {
      const { data, statusText, status } = await axios.post(userURL, params)
      if (status > 199 && status < 300) {
        console.log(data)
        return fulfillWithValue(data)

      }
        
      
    } catch (e) {
      alert("error")
    }
    
  }
)

export const fetchLogin = createAsyncThunk<AuthSliceStatePayload, Iparams>(
  `@auth/login`,

  async (params, { fulfillWithValue, rejectWithValue }) => {

    const userURL = `http://localhost:3001/auth/login`

    try {
        const { data, statusText, status } = await axios.post(userURL, params)
      if (status >= 199 && status < 300) {
        
        return fulfillWithValue(data)
      }
        
      
    } catch (e) {
      return rejectWithValue(e)
    }
     
  }
)





const initialState: AuthSliceState = {
  email: null,
  accessToken: null,
  status: Status.LOADING,
  _id: null,
  role: null,

  // showModal: false,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      setClearAuth(state) {
      state.email = null;
      state.accessToken = null;
      
    },
    setStatus(state) {
      state.status = Status.SUCCESS
    }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchRegister.pending, (state) => {
      state.status = Status.LOADING;
    })
    builder.addCase(
      fetchRegister.fulfilled, (state, action) => {
      state.email = action.payload.email;
        state.accessToken = action.payload.token;
        state._id = action.payload._id;
        state.status = Status.SUCCESS;
      state.role = action.payload.role
    })
    builder.addCase(
      fetchRegister.rejected, (state, action) => {
      state.status = Status.ERROR;
        state.email = null;
      console.log(action.error.message, action.error.code)
     
    })
    builder.addCase(
      fetchLogin.pending, (state) => {
      state.status = Status.LOADING;
    })
    builder.addCase(
      fetchLogin.fulfilled, (state, action) => {
      state.email = action.payload.email;
        state.accessToken = action.payload.token;
        state._id = action.payload._id
        state.role = action.payload.role
        state.status = Status.SUCCESS;
       
      
    })
    builder.addCase(
      fetchLogin.rejected, (state, action) => {
      state.status = Status.ERROR;
        state.email = null;
      console.log(action.error.message, action.error.code)
     
    })
  },
});

export const {setClearAuth, setStatus} = authSlice.actions


export default authSlice.reducer;