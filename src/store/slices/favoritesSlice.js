import { createSlice } from "@reduxjs/toolkit";

const getFavoriteItems = () => {
  const items = localStorage.getItem("favorites");
  return items ? JSON.parse(items) : [];
};
const saveFavoriteItems = (items) => {
  localStorage.setItem("favorites", JSON.stringify(items));
};
const initialState = {
  items: getFavoriteItems(),
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavoriteItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((fav) => fav.code === item.code);
      if (!existingItem) {
        state.items.push(item);
        saveFavoriteItems(state.items);
      }
    },
    removeFavoriteItem: (state, action) => {
      const code = action.payload;
      state.items = state.items.filter((favorite) => favorite.code !== code);
      saveFavoriteItems(state.items);
    },
    setFavorite: (state, action) => {
      state.items = action.payload;
    },
    loadFavFromLS: (state, action) => {
      state.items = getFavoriteItems();
    },
  },
});
export const {
  addFavoriteItem,
  removeFavoriteItem,
  setFavorite,
  loadFavFromLS,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
