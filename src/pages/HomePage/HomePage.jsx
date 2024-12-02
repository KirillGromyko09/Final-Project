import { Container } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate";
import BannersCarousel from "../../components/UI/BannersCarousel";
import CategoriesList from "../../components/Categories/CategoriesList";
import ProductList from "../../components/Products/ProductsList/index.js";

const HomePage = () => {
  return (
    <BaseTemplate
      className="homePage"
      showMainHeader={true}
      showCartHeader={false}
      showBottomHeader={true}
      showTopFooter={true}
      showMainFooter={true}
      showBottomFooter={true}
    >
      <Container>
        <BannersCarousel />
        <CategoriesList />
        <ProductList />
      </Container>
    </BaseTemplate>
  );
};

export default HomePage;
