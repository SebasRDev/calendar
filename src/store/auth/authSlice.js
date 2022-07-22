import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: 'checking', //'authenticated','not-authenticated'
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'checking',
      state.user = {},
      state.errorMessage = undefined
    },
    onLogin: (state, {payload}) => {
      state.status = 'authenticated',
      state.user = payload,
      state.errorMessage = undefined
    },
    onFailedLogin: (state, {payload}) => {
      state.status = 'not-authenticated',
      state.user = {},
      state.errorMessage = payload
    },
    clearErrorMsg: (state) => {
      state.errorMessage = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onFailedLogin, clearErrorMsg } = authSlice.actions;
