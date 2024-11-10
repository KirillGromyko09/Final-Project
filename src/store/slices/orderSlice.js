// src/store.js
import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
    name: 'order',
    initialState: { address: {}, deliveryMethod: {}, paymentMethod: {} },
    reducers: {
        setAddress: (state, action) => {
            state.address = action.payload;
        },
        setDeliveryMethod: (state, action) => {
            state.deliveryMethod = action.payload;
        },
        setPaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
        }
    }
});


export const { setAddress, setDeliveryMethod, setPaymentMethod } = orderSlice.actions;
export default orderSlice.reducer;
