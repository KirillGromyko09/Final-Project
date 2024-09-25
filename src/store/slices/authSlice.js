import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      Cookies.set("user", JSON.stringify(action.payload));
    },
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
      Cookies.set("user", JSON.stringify(action.payload));
    },
    authFailure(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      Cookies.remove("user");
    },
    loadUserFromCookies(state) {
      const user = Cookies.get("user");
      if (user) {
        state.isAuthenticated = true;
        state.user = JSON.parse(user);
      } else {
        state.isAuthenticated = false;
        state.user = null;
      }
    },
  },
});
export const {
  registerSuccess,
  loginSuccess,
  authFailure,
  logout,
  loadUserFromCookies,
} = authSlice.actions;
export default authSlice.reducer;
