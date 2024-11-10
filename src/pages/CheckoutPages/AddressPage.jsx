// src/pages/AddressPage.jsx
import React from 'react';
import BaseTemplate from '../../templates/BaseTemplate';
import { Container } from '@mui/material';
import Address from '../../components/Checkout/Address/Address';

const AddressPage = () => {
    return (
        <BaseTemplate
            showMainHeader={true}
            showCartHeader={false}
            showBottomHeader={true}
            showTopFooter={true}
            showMainFooter={true}
            showBottomFooter={true}
        >
            <Container>
                <Address />
            </Container>
        </BaseTemplate>
    );
};

export default AddressPage;
