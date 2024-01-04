// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// export const registration = createAsyncThunk(
//   'auth/registration',
//   async ({ name, email, password }, thunkAPI) => {
//     try {
//       const { data } = await axios.post('/signup');
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// const setToken = token => {
//   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };
export const registration = async body => {
  const { data } = await axios.post('/users/signup', body);
  //  setToken(data.token);
  return data;
};
