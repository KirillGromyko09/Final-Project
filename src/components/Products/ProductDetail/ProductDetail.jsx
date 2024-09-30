import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites.js";
import useCart from "../../hooks/useCart.js";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import {
  Check,
  Favorite,
  FavoriteBorder,
  Payment,
  ShoppingCart,
  Verified,
} from "@mui/icons-material";
import PropTypes from "prop-types";
import CartPopup from "../../Cart/CartPopup";
import { addViewedProduct } from "../../../store/slices/viewedPrSlice.js";
import { styles } from "./style.js";
import useSnackbar from "../../hooks/useCart.js";

const ProductDetail = ({
  imageUrl,
  title,
  rating,
  ratingCount,
  code,
  description,
  oldPrice,
  newPrice,
  discount,
  bonus,
}) => {
  const product = {
    id: code,
    image: imageUrl,
    title,
    price: parseFloat(newPrice),
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isInCart, handleAddToCart } = useCart(product);
  const { isFavorite, handleToggleFavorite } = useFavorites(code, product);
  const {
    showSnackbar,
    snackbarMessage,
    showSnackbarWithMessage,
    handleCloseSnackbar,
  } = useSnackbar();

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCartWithSnackbar = () => {
    handleAddToCart();
    setShowPopup(true);
    showSnackbarWithMessage("Товар успішно доданий до кошика");
  };

  const handleFavoriteToggle = () => {
    handleToggleFavorite(showSnackbarWithMessage);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleButtonClick = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      handleAddToCartWithSnackbar();
    }
  };

  useEffect(() => {
    dispatch(addViewedProduct(product));
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [code, dispatch, product]);

  return (
    <Box>
      <Box sx={styles.productDetailContainer}>
        <Box sx={styles.imageContainer}>
          <img src={imageUrl} alt={title} style={styles.image} />
        </Box>
        <Box sx={styles.infoContainer}>
          <Box sx={styles.titleFavorite}>
            <Typography sx={styles.title}>
              {" "}
              {typeof title === "string" ? title : JSON.stringify(title)}
            </Typography>
            <Box sx={styles.iconHeart}>
              <IconButton onClick={handleFavoriteToggle}>
                {isFavorite ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Box>
          </Box>
          <Box sx={styles.ratingCode}>
            <Box sx={styles.rating}>
              <Box sx={styles.ratingStars}>
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </Box>
              <Typography variant="body2" sx={styles.ratingCount}>
                ({ratingCount})
              </Typography>
            </Box>
            <Typography variant="body2" sx={styles.code}>
              Код: {code}
            </Typography>
          </Box>
          <Typography sx={styles.description}>
            {" "}
            {typeof description === "string"
              ? description
              : JSON.stringify(description)}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Box sx={styles.priceButton}>
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
              <Typography variant="body2" sx={styles.bonus}>
                +{bonus} ₴ на бонусний рахунок
              </Typography>
            </Box>
            <Box sx={styles.buttonsContainer}>
              <Button
                variant="contained"
                sx={styles.buyButton}
                onClick={handleButtonClick}
                endIcon={isInCart ? <Check /> : <ShoppingCart />}
              >
                {isInCart ? "В кошику" : "Купити"}
              </Button>
            </Box>
          </Box>
          <Divider sx={{ marginY: 2 }} />
          <Box sx={styles.textContainer}>
            <Box sx={styles.iconText}>
              <Payment sx={styles.iconInfo} />
              <Typography variant="body2" sx={styles.info}>
                Оплачуйте покупку готівкою, карткою або перерахунком на
                банківські реквізити (безготівково)
              </Typography>
            </Box>
            <Box sx={styles.iconText}>
              <Verified sx={styles.iconInfo} />
              <Typography variant="body2" sx={styles.info}>
                Всі товари мають сертифікати та гарантії від виробника.
                Повернути їх можна протягом 14 днів після покупки
              </Typography>
            </Box>
          </Box>
        </Box>
        {showPopup && (
          <CartPopup
            product={{ imageUrl, title, code, newPrice, oldPrice }}
            onClose={handleClosePopup}
          />
        )}
      </Box>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Box>
  );
};

ProductDetail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  oldPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.number.isRequired,
  discount: PropTypes.number.isRequired,
  code: PropTypes.number.isRequired,
  bonus: PropTypes.string.isRequired,
};

export default ProductDetail;
