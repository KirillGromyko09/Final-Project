import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  ClickAwayListener,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useSnackbar } from "@mui/base";
import useFavorites from "../../hooks/useFavorites.js";
import useCart from "../../hooks/useCart.js";
import { styles } from "./style.js";
import abank from "./../../../assets/svg/abank.svg";
import kredit from "./../../../assets/svg/kredit.svg";
import delivery from "./../../../assets/svg/delivery.svg";
import mono from "./../../../assets/svg/mono.svg";
import oche from "./../../../assets/svg/oche.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import CartPopup from "../../Cart/CartPopup";
import PropTypes from "prop-types";

const ProductCard = ({
  imageUrl,
  code,
  title,
  rating,
  ratingCount,
  oldPrice,
  discount,
  newPrice,
  bonus,
}) => {
  const product = {
    imageUrl,
    code,
    title,
    newPrice,
    oldPrice,
    discount,
    quantity: 1,
  };
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const { isFavorite, handleToggleFavorite } = useFavorites(code, product);
  const { isInCart, handleAddToCart } = useCart(product);

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const { getRootProps, onClickAway } = useSnackbar({
    onClose: handleCloseSnackbar,
    open: openSnackbar,
    autoHideDuration: 5000,
  });
  const handleProductClick = (code) => {
    navigate(`/product/${code}`);
  };
  const handleAddToCartOrNavigate = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      handleAddToCart();
      setShowPopup(true);
      setOpenSnackbar(true);
    }
  };
  const handleFavoriteToggle = () => {
    handleToggleFavorite((message) => {
      setOpenSnackbar(true);
    });
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <Box sx={styles.container}>
      <Box>
        <Box
          sx={styles.imageContainer}
          onClick={() => handleProductClick(code)}
        >
          <img src={imageUrl} alt={title} style={styles.image} />
        </Box>
        <Box>
          <Box sx={styles.codeFavorite}>
            <Typography variant="body2" sx={styles.code}>
              Код: {code}
            </Typography>
            <Box sx={styles.icon}>
              <IconButton onClick={handleFavoriteToggle}>
                {isFavorite ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={styles.title}
            onClick={() => handleProductClick(code)}
          >
            {title}
          </Typography>
          <Box sx={styles.rating}>
            <Box sx={styles.ratingStars}>
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </Box>
            <Typography variant="body2" sx={styles.ratingCount}>
              ({ratingCount})
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={styles.paymentMethods}>
          <img src={delivery} alt="Delivery" />
          <img src={oche} alt="PrivatBank" />
          <img src={mono} alt="MonoBank" />
          <img src={kredit} alt="Credit" />
          <img src={abank} alt="ABank" />
        </Box>
        <Box sx={styles.priceContainer}>
          <Box sx={styles.price}>
            <Box sx={styles.oldDiscount}>
              <Typography variant="body2" sx={styles.oldPrice}>
                {oldPrice} ₴
              </Typography>
              <Typography variant="body2" sx={styles.discount}>
                -{discount}%
              </Typography>
            </Box>
            <Box>
              <Typography variant="h6" sx={styles.newPrice}>
                {newPrice} ₴
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={styles.button}
            onClick={handleAddToCartOrNavigate}
            endIcon={
              isInCart ? (
                <DoneAllOutlinedIcon sx={styles.iconCart} />
              ) : (
                <ShoppingCartIcon sx={styles.iconCart} />
              )
            }
          ></Button>
        </Box>
        <Typography variant="body2" sx={styles.bonus}>
          +{bonus} ₴ на бонусний рахунок
        </Typography>
      </Box>
      {showPopup && (
        <CartPopup
          product={{ imageUrl, title, code, newPrice, oldPrice }}
          onClose={handleClosePopup}
        />
      )}
      {openSnackbar && (
        <ClickAwayListener onClickAway={onClickAway}>
          <Snackbar {...getRootProps()}>
            <Typography variant="body2">
              Товар успішно доданий до кошика
            </Typography>
          </Snackbar>
        </ClickAwayListener>
      )}
    </Box>
  );
};
ProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  oldPrice: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  newPrice: PropTypes.number.isRequired,
  bonus: PropTypes.string.isRequired,
};
export default ProductCard;
