// src/pages/DeliveryPage.jsx
import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

const DeliveryPage = () => {
    const deliveryMethods = [
        { id: 1, name: 'Standard Delivery', cost: 50, time: '3-5 days' },
        { id: 2, name: 'Express Delivery', cost: 100, time: '1-2 days' }
    ];
    const [selectedMethod, setSelectedMethod] = useState(null);

    return (
        <Box>
            <Typography variant="h4">Select Delivery Method</Typography>
            {deliveryMethods.map(method => (
                <Button
                    key={method.id}
                    onClick={() => setSelectedMethod(method)}
                    variant={selectedMethod?.id === method.id ? 'contained' : 'outlined'}
                >
                    {method.name} - {method.cost}₴ ({method.time})
                </Button>
            ))}
        </Box>
    );
};

export default DeliveryPage;
