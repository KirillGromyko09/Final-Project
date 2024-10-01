import { useState } from "react";
import useCart from "../../../hooks/useCart.js";
import { useNavigate } from "react-router-dom";
import useSnackbar from "../../../hooks/useSnackbar.js";
import { Box, Button, Snackbar, Typography } from "@mui/material";
import CartPopup from "../../../Cart/CartPopup";
import { ShoppingCart } from "@mui/icons-material";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import PropTypes from "prop-types";
import { styles } from "./style.js";

const ViewedProductCard = ({
  imageUrl,
  title,
  code,
  oldPrice,
  discount,
  newPrice,
  bonus,
}) => {
  const product = {
    imageUrl,
    title,
    code,
    oldPrice,
    discount,
    newPrice,
    quantity: 1,
  };
  const [showPopup, setShowPopup] = useState(false);
  const { isInCart, handleAddToCart } = useCart(product);
  const navigate = useNavigate();
  const {
    showSnackbar,
    snackbarMessage,
    showSnackbarWithMessage,
    handleCloseSnackbar,
  } = useSnackbar();
  const handleButtonClick = () => {
    if (isInCart) {
      navigate("/cart");
    } else {
      handleAddToCart();
      showSnackbarWithMessage("Товар успішно доданий до кошика");
      setShowPopup(true);
    }
  };
  const handleProductClick = (code) => {
    navigate(`/product/${code}`);
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
          <Typography
            variant="h6"
            sx={styles.title}
            onClick={() => handleProductClick(code)}
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={styles.code}>
            Код: {code}
          </Typography>
        </Box>
      </Box>
      <Box sx={styles.infoContainer}>
        <Box sx={styles.priceButton}>
          <Box sx={styles.priceContainer}>
            <Box sx={styles.oldDiscount}>
              <Typography variant="body2" sx={styles.oldPrice}>
                {oldPrice} ₴
              </Typography>
              <Typography variant="body2" sx={styles.discount}>
                -{discount}%
              </Typography>
            </Box>
            <Typography variant="h6" sx={styles.newPrice}>
              {newPrice} ₴
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={styles.button}
            onClick={handleButtonClick}
            endIcon={
              isInCart ? (
                <DoneAllOutlinedIcon sx={styles.iconCart} />
              ) : (
                <ShoppingCart sx={styles.iconCart} />
              )
            }
          />
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
      <Snackbar
        open={showSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Box>
  );
};
ViewedProductCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
  oldPrice: PropTypes.string.isRequired,
  discount: PropTypes.number.isRequired,
  newPrice: PropTypes.number.isRequired,
  bonus: PropTypes.string.isRequired,
};

export default ViewedProductCard;
