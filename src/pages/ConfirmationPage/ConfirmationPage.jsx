import CheckoutConfirmation from "../../components/Checkout/CheckoutConfirmation";
import { Container } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate";
import { useSelector } from "react-redux";

const ConfirmationPage = () => {
  const { city, deliveryMethod, contactInfo, totalAmount, orderDetails } =
    useSelector((state) => state.order);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <BaseTemplate
      className="confirmationPage"
      showTopHeader={true}
      showCartHeader={false}
      showBottomHeader={true}
      showTopFooter={true}
      showMainFooter={true}
      showBottomFooter={true}
    >
      <Container>
        <CheckoutConfirmation
          city={city}
          deliveryMethod={deliveryMethod}
          contactInfo={contactInfo}
          totalAmount={totalAmount}
        />
      </Container>
    </BaseTemplate>
  );
};

export default ConfirmationPage;
