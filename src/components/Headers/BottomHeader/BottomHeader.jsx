import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Badge,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@mui/material";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  loadUserFromCookies,
  logout,
} from "../../../store/slices/authSlice.js";
import SearchBar from "../../UI/SearchBar";
import CatalogDropdown from "../../UI/CatalogDropdown";
import AuthModal from "../../Authentication/AuthModal";
import ProfileDropdown from "../../UserProfile/ProfileDropdown";
import { styles } from "./styles";

const BottomHeader = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { cartCount, finalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(loadUserFromCookies());
  }, [dispatch]);

  const handleCartClick = () => {
    navigate("cart");
  };

  const handleFavoriteClick = () => {
    navigate("/fav-products");
  };

  const handleAuthModalOpen = () => {
    setOpenAuthModal(true);
  };

  const handleAuthModalClose = () => {
    setOpenAuthModal(false);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        sx={{
          ...styles.appBar,
          position: isSticky ? "fixed" : "static",
          top: isSticky ? 0 : "auto",
        }}
      >
        <Toolbar sx={styles.toolbar}>
          <Box>
            <CatalogDropdown />
          </Box>
          <SearchBar />
          <Box sx={styles.rightBox}>
            {isAuthenticated ? (
              <ProfileDropdown onLogout={handleLogout} />
            ) : (
              <Button
                aria-controls="categories-menu"
                aria-haspopup="true"
                onClick={handleAuthModalOpen}
                sx={styles.iconButtonAuth}
              >
                Увійти
              </Button>
            )}
            <Divider orientation="vertical" flexItem sx={styles.divider} />
            <IconButton sx={styles.iconButton} onClick={handleFavoriteClick}>
              <Favorite />
            </IconButton>
            <Divider orientation="vertical" flexItem sx={styles.divider} />
            <IconButton sx={styles.iconButton} onClick={handleCartClick}>
              <Badge badgeContent={cartCount} sx={styles.badge}>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <Typography variant="h6" component="div" sx={styles.amountText}>
              {finalAmount.toFixed(2)} ₴
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <AuthModal open={openAuthModal} onClose={handleAuthModalClose} />
      {isSticky && <Box sx={{ height: "64px" }} />}
    </>
  );
};

export default BottomHeader;
