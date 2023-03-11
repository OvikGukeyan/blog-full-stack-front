import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchAuthData = createAsyncThunk('auth/fetchAuth', async(params) => {
    const {data} = await axios.post('/auth/login', params);
    return data;
})

const initialState = {
    data: null,
    status: 'loading'
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [fetchAuthData.pending]: (state) => {
            state.data = null;
            state.status = 'loading';
        },
        [fetchAuthData.fulfilled]: (state, action) => {
            state.status = 'loaded';
            state.data = action.payload;
        },
        [fetchAuthData.rejected]: (state) => {
            state.data = null;
            state.status = 'error';
        }
    }
});

export const authReducer = authSlice.reducer;