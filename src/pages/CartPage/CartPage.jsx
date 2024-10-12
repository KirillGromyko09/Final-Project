import React from "react";
import { Container } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
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
        <Cart />
      </Container>
    </BaseTemplate>
  );
};

export default CartPage;
