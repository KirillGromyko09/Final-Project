import BaseTemplate from "../../templates/BaseTemplate";
import { Container } from "@mui/material";
import Confirmation from "../../components/Checkout/Confirmation";

const ConfirmationPage = () => {
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
        <Confirmation />
      </Container>
    </BaseTemplate>
  );
};

export default ConfirmationPage;
