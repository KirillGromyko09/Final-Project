import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./Header.module.scss";

const MainHeader = () => {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src="../../../img/svg/logo-main-comfy.svg" alt="Comfy"/>
          </Link>
        </Box>
        <Box>
          <IconButton component={Link} to="cart" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainHeader;
