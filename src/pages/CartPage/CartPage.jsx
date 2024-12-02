import { Container } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
  return (
    <BaseTemplate
      className="cartPage"
      showMainHeader={false}
      showCartHeader={true}
      showBottomHeader={false}
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
