import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import MainHeader from "../../components/Headers/MainHeader";
import CartHeader from "../../components/Headers/CartHeader";
import BottomHeader from "../../components/Headers/BottomHeader";
import TopFooter from "../../components/Footer/TopFooter";
import MainFooter from "../../components/Footer/MainFooter";
import BottomFooter from "../../components/Footer/BottomFooter";

const BaseTemplate = ({
  children,
  className,
  showMainHeader,
  showCartHeader,
  showBottomHeader,
  showTopFooter,
  showMainFooter,
  showBottomFooter,
}) => {
  return (
    <Box className={className} sx={{ width: "100%", padding: 0, margin: 0 }}>
      {showMainHeader && <MainHeader />}
      {showCartHeader && <CartHeader />}
      {showBottomHeader && <BottomHeader />}
      <Box sx={{ flexGrow: 1 }}>{children}</Box>
      {showTopFooter && <TopFooter />}
      {showMainFooter && <MainFooter />}
      {showBottomFooter && <BottomFooter />}
    </Box>
  );
};

BaseTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showMainHeader: PropTypes.bool,
  showCartHeader: PropTypes.bool,
  showBottomHeader: PropTypes.bool,
  showTopFooter: PropTypes.bool,
  showMainFooter: PropTypes.bool,
  showBottomFooter: PropTypes.bool,
};

export default BaseTemplate;
