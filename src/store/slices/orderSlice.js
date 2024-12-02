import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDetails: null,
  status: "idle",
  error: null,
  paymentMethod: JSON.parse(localStorage.getItem("paymentMethod")) || null,
  deliveryMethod: JSON.parse(localStorage.getItem("deliveryMethod")) || null,
  city: localStorage.getItem("city") || "",
  comment: localStorage.getItem("comment") || "",
  noCall: JSON.parse(localStorage.getItem("noCall")) || false,
  contactInfo: JSON.parse(localStorage.getItem("contactInfo")) || {
    phoneNumber: "",
    firstName: "",
    email: "",
  },
  orderTotal: JSON.parse(localStorage.getItem("orderTotal")) || 0,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    placeOrder: (state) => {
      state.status = "loading";
    },
    placeOrderSuccess: (state, action) => {
      state.status = "succeeded";
      state.orderDetails = action.payload;
    },
    placeOrderFailure: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    setContactInfo: (state, action) => {
      state.contactInfo = action.payload;
      localStorage.setItem("contactInfo", JSON.stringify(action.payload));
    },
    setDeliveryMethod: (state, action) => {
      state.deliveryMethod = action.payload;
      localStorage.setItem("deliveryMethod", JSON.stringify(action.payload));
    },
    setCity: (state, action) => {
      state.city = action.payload;
      localStorage.setItem("city", action.payload);
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
    },
    setComment: (state, action) => {
      state.comment = action.payload;
      localStorage.setItem("comment", action.payload);
    },
    setNoCall: (state, action) => {
      state.noCall = action.payload;
      localStorage.setItem("noCall", JSON.stringify(action.payload));
    },
    setOrderTotal: (state, action) => {
      state.orderTotal = action.payload;
      localStorage.setItem("orderTotal", JSON.stringify(action.payload));
    },
    clearOrderData: (state) => {
      state.contactInfo = { phoneNumber: "", firstName: "", email: "" };
      state.deliveryMethod = null;
      state.paymentMethod = null;
      state.city = "";
      state.comment = "";
      state.noCall = false;
      state.orderTotal = 0;

      localStorage.removeItem("contactInfo");
      localStorage.removeItem("deliveryMethod");
      localStorage.removeItem("paymentMethod");
      localStorage.removeItem("city");
      localStorage.removeItem("comment");
      localStorage.removeItem("noCall");
      localStorage.removeItem("orderTotal");
    },
  },
});

export const {
  setContactInfo,
  setDeliveryMethod,
  setCity,
  setPaymentMethod,
  setComment,
  setNoCall,
  setOrderTotal,
  placeOrder,
  placeOrderSuccess,
  placeOrderFailure,
  clearOrderData,
} = orderSlice.actions;

export default orderSlice.reducer;
