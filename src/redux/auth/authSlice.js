import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    user: { name: null, email: null },
    // isLoggedIn: false,
    // isRefreshing: false,
  },
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      //   state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
