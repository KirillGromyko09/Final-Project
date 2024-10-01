import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  viewedProducts: JSON.parse(localStorage.getItem("viewedProducts")) || [],
};

const viewedProductsSlice = createSlice({
  name: "viewedProducts",
  initialState,
  reducers: {
    addViewedProduct: (state, action) => {
      const product = action.payload;
      const isProductViewed = state.viewedProducts.find(
        (product) => product.id === product.id,
      );
      if (!isProductViewed) {
        state.viewedProducts = [product, ...state.viewedProducts];
      }
      if (state.viewedProducts.length > 8) {
        state.viewedProducts.pop();
      }
      localStorage.setItem(
        "viewedProducts",
        JSON.stringify(state.viewedProducts),
      );
    },
  },
});
export const { addViewedProduct } = viewedProductsSlice.actions;
export default viewedProductsSlice.reducer;
