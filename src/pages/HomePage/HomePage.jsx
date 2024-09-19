import React from "react";
import { Box, Container } from "@mui/material";
import BaseTemplate from "../../templates/BaseTemplate";

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
      <Container></Container>
    </BaseTemplate>
  );
};

export default HomePage;
