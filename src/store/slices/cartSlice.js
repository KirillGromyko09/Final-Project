import { createSlice } from "@reduxjs/toolkit";
import storageService from "../../utils/storage/StorageService.js";

const loadCartFromLS = () => {
  const savedCart = localStorage.getItem('cartItems');
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return { items: [], totalAmount: 0, totalDiscount: 0, finalAmount: 0, cartCount: 0 };
};

const initialState = loadCartFromLS();

const updateTotals = (state) => {
  state.totalAmount = state.items.reduce(
    (total, item) => total + item.oldPrice * item.quantity,
    0,
  );
  state.totalDiscount = state.items.reduce(
    (total, item) => total + (item.oldPrice - item.newPrice) * item.quantity,
    0,
  );
  state.finalAmount = state.totalAmount - state.totalDiscount;
  state.cartCount = state.items.reduce(
    (count, item) => count + item.quantity,
    0,
  );
  try {
    localStorage.setItem('cartItems', JSON.stringify(state));
  } catch (error) {
    console.error("Ошибка при сохранении данных в localStorage:", error);
  }
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      if (!Array.isArray(state.items)) {
        state.items = [];
      }
      const existingItem = state.items.find(
        (cartItem) => cartItem.code === item.code,
      );

      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({ ...item, quantity: item.quantity });
      }

      updateTotals(state);
    },
    removeItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.code === item.code,
      );

      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter(
            (cartItem) => cartItem.code !== item.code,
          );
        } else {
          existingItem.quantity -= 1;
        }

        updateTotals(state);
      }
    },
    deleteItem: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter(
        (cartItem) => cartItem.code !== item.code,
      );
      updateTotals(state);
    },
    deleteAllItems: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalDiscount = 0;
      state.finalAmount = 0;
      state.cartCount = 0;
      localStorage.setItem('cartItems', JSON.stringify(state));
    },
  },
});
export const { addItem, removeItem, deleteItem, deleteAllItems } =
  cartSlice.actions;
export default cartSlice.reducer;
