import BaseTemplate from "../../templates/BaseTemplate";

import CategoryProductsList from "../../components/Categories/CategoryProductsList";
import { Container } from "@mui/material";

const ProductPage = () => {
  return (
    <BaseTemplate
      className="categoryPage"
      showMainHeader={true}
      showCartHeader={false}
      showBottomHeader={true}
      showTopFooter={true}
      showMainFooter={true}
      showBottomFooter={true}
    >
      <Container>
        <CategoryProductsList />
      </Container>
    </BaseTemplate>
  );
};

export default ProductPage;
