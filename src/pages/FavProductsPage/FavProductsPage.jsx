import BaseTemplate from "../../templates/BaseTemplate/index.js";
import { Container } from "@mui/material";
import FavProductsList from "../../components/Products/FavProductsList/index.js";

const FavProductsPage = () => {
  return (
    <BaseTemplate
      className="favoriteProductsPage"
      showMainHeader={true}
      showCartHeader={false}
      showBottomHeader={true}
      showTopFooter={true}
      showMainFooter={true}
      showBottomFooter={true}
    >
      <Container>
        <FavProductsList />
      </Container>
    </BaseTemplate>
  );
};

export default FavProductsPage;
