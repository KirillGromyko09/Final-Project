import React from "react";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import { Container } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate/index.js";

const CheckoutPage = () => {
  return (
    <BaseTemplate
      className="home-page"
      showMainHeader={true}
      showCartHeader={false}
      showBottomHeader={true}
      showTopFooter={true}
      showMainFooter={true}
      showBottomFooter={true}
    >
      <Container>
        <CheckoutForm />
      </Container>
    </BaseTemplate>
  );
};

export default CheckoutPage;
