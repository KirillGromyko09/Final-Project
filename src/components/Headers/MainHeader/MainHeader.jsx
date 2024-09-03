import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Box, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./Header.module.scss";
import Logo from "./Logo";

const MainHeader = () => {
  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <Box className={styles.logo}>
          <Logo />
        </Box>
        <Box className={styles.nav} sx={{ flexGrow: 1 }}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
        </Box>
        <Box className={styles.userActions}>
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
