import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi/productsApi.js";
import authReducer from "./slices/authSlice.js";
import cartReducer from "./slices/cartSlice.js";
import favoritesReducer from "./slices/favoritesSlice.js";
import viewedProductsReducer from "./slices/viewedProductsSlice";
import orderReducer from "./slices/orderSlice.js";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    auth: authReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    viewedProducts: viewedProductsReducer,
    order:orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
