import BaseTemplate from "../../templates/BaseTemplate";
import { Container } from "@mui/material";
import Payment from "../../components/Checkout/Payment";

const PaymentPage = () => {
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
        <Payment />
      </Container>
    </BaseTemplate>
  );
};

export default PaymentPage;