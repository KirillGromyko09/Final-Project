import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box, Badge, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "../../../assets/svg/logo-main-comfy.svg";
import { Phone } from "@mui/icons-material";

const MainHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/">
            <img src={logo} alt="Comfy" />
          </Link>
        </Box>
        <Box>
          <Button>Акції</Button>
          <Button>Подарункові карти</Button>
          <Button>Магазини</Button>
          <Button>Ще</Button>
          <Button>
            <Phone />
            Допомога
          </Button>
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
