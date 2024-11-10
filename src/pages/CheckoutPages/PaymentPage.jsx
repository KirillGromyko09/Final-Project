// src/pages/PaymentPage.jsx
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const PaymentPage = () => {
    const paymentMethods = [
        { id: 1, name: 'Credit Card' },
        { id: 2, name: 'PayPal' },
        { id: 3, name: 'Cash on Delivery' }
    ];
    const [selectedMethod, setSelectedMethod] = useState(null);

    return (
        <Box>
            <Typography variant="h4">Select Payment Method</Typography>
            {paymentMethods.map(method => (
                <Button
                    key={method.id}
                    onClick={() => setSelectedMethod(method)}
                    variant={selectedMethod?.id === method.id ? 'contained' : 'outlined'}
                >
                    {method.name}
                </Button>
            ))}
        </Box>
    );
};

export default PaymentPage;
