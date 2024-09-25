import React from "react";
import { Container } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate";
import BannersCarousel from "../../components/UI/BannersCarousel";

const HomePage = () => {
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
        <BannersCarousel />
      </Container>
    </BaseTemplate>
  );
};

export default HomePage;
