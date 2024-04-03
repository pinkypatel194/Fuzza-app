import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserData } from './UserAPI';

const initialState = {
   value: 0,
   email: '',
   password: '',
}

export const getUser = createAsyncThunk("displaydata/user", async () => {
   try {
      const response = await UserData();
      console.log(response);
      return response.data; 
   } catch (error) {
      console.log(error);
      throw error;
   }
})

const Dataslice = createSlice({
   name: 'data',
   initialState,
   reducers: {},
   extraReducers:(bulider)=>{
        
   }
});

export default Dataslice.reducer;
