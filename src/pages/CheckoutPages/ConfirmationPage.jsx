// src/pages/ConfirmationPage.jsx
import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const ConfirmationPage = () => {
    const cartItems = useSelector(state => state.cart.items);
    const address = useSelector(state => state.order.address);
    const deliveryMethod = useSelector(state => state.order.deliveryMethod);
    const paymentMethod = useSelector(state => state.order.paymentMethod);

    return (
        <Box>
            <Typography variant="h4">Confirm Your Order</Typography>
            <Typography variant="h6">Items:</Typography>
            {cartItems.map(item => (
                <Typography key={item.code}>{item.title} - {item.quantity} pcs</Typography>
            ))}
            <Typography variant="h6">Delivery Address:</Typography>
            <Typography>{address.city}, {address.warehouse}</Typography>
            <Typography variant="h6">Delivery Method:</Typography>
            <Typography>{deliveryMethod.name} - {deliveryMethod.cost}₴ ({deliveryMethod.time})</Typography>
            <Typography variant="h6">Payment Method:</Typography>
            <Typography>{paymentMethod.name}</Typography>
            <Button variant="contained" color="primary">
                Confirm Order
            </Button>
        </Box>
    );
};

export default ConfirmationPage;
