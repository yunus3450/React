import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://localhost:7168/api/auth/';

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await axios.post(`${API_URL}register`, userData);
  return response.data;
});

export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);
  return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post(`${API_URL}logout`);
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
      });
  },
});

export default authSlice.reducer;
