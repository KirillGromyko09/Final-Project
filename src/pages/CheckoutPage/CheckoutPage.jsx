import { Container } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate/index.js";
import Checkout from "../../components/Checkout/Checkout";

const CheckoutPage = () => {
  return (
    <BaseTemplate
      className="checkoutPage"
      showMainHeader={false}
      showCartHeader={true}
      showBottomHeader={false}
      showTopFooter={true}
      showMainFooter={true}
      showBottomFooter={true}
    >
      <Container>
        <Checkout />
      </Container>
    </BaseTemplate>
  );
};

export default CheckoutPage;
