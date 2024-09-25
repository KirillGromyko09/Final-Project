import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi/productsApi.js";
import authReducer from "./slices/authSlice.js";
import cartReducer from "./slices/cartSlice.js";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
