import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../store/slices/cartSlice.js";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { Close as CloseIcon, CheckSharp } from "@mui/icons-material";
import { styles } from "./style.js";
import QuantitySelector from "../../UI/QuantitySelector/index.js";
import PropTypes from "prop-types";

const CartPopup = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popupRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleProductClick = () => navigate(`/product/${product.code}`);
  const handleToCart = () => navigate("/cart");
  const handleAddToCart = () => {
    dispatch(addItem({ ...product, quantity: quantity - 1 }));
    onClose();
    navigate("/checkout", { state: { product, quantity } });
  };

  const totalNewPrice = product.newPrice * quantity.toFixed(2);
  const totalOldPrice = product.oldPrice * quantity.toFixed(2);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <Box sx={styles.popupContainer} ref={popupRef}>
      <Box sx={styles.popupHeader}>
        <Typography variant="h6">Товар додано до кошика</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={styles.popupContent}>
        <Box
          sx={styles.productImageContainer}
          onClick={handleProductClick}
          style={{ cursor: "pointer" }}
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            style={styles.productImage}
          />
        </Box>
        <Box sx={styles.productInfo}>
          <Box sx={styles.iconText}>
            <CheckSharp sx={styles.checkIcon} />
            <Typography variant="body1" sx={styles.productAvailability}>
              Можна забрати сьогодні
            </Typography>
          </Box>
          <Box sx={styles.productInfoPrice}>
            <Box
              sx={styles.productTitleCode}
              onClick={handleProductClick}
              style={{ cursor: "pointer" }}
            >
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body2" color="textSecondary">
                Код: {product.code}
              </Typography>
            </Box>
            {isAuthenticated && (
              <QuantitySelector
                initialQuantity={quantity}
                onQuantityChange={setQuantity}
              />
            )}
            <Box sx={styles.productPrice}>
              <Typography variant="body2" sx={styles.oldPrice}>
                {totalOldPrice} ₴
              </Typography>
              <Typography variant="h6" sx={styles.newPrice}>
                {totalNewPrice} ₴
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.popupActions}>
        <Button sx={styles.continueButton} variant="outlined" onClick={onClose}>
          Продовжити покупки
        </Button>
        <Button
          sx={styles.goToCartButton}
          variant="contained"
          onClick={handleToCart}
        >
          Перейти до кошика
        </Button>
        {isAuthenticated && (
          <Button
            sx={styles.makeOrderButton}
            variant="outlined"
            onClick={handleAddToCart}
          >
            Оформити замовлення
          </Button>
        )}
      </Box>
    </Box>
  );
};
CartPopup.propTypes = {
  product: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
    newPrice: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CartPopup;
