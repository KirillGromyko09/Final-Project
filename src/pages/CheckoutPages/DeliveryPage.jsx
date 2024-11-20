import BaseTemplate from "../../templates/BaseTemplate";
import { Container } from "@mui/material";
import Delivery from "../../components/Checkout/Delivery";

const DeliveryPage = () => {
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
        <Delivery />
      </Container>
    </BaseTemplate>
  );
};

export default DeliveryPage;
