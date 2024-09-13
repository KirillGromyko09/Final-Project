import React from "react";
import MainHeader from "../../components/Headers/MainHeader";
import BottomHeader from "../../components/Headers/BottomHeader";
import { Box, Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Box>
        <MainHeader />
      </Box>
      <Box>
        <BottomHeader />
      </Box>
    </Container>
  );
};

export default HomePage;
