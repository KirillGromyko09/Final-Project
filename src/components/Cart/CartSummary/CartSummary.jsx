import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styles } from "./styles";

const formatCurrency = (amount) => {
  return amount.toFixed(2);
};

const CartSummary = ({
  cartCount,
  totalAmount,
  totalDiscount,
  finalAmount,
}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Box sx={styles.summary}>
      <Box sx={styles.summaryDetails}>
        <Box sx={styles.summaryTextContainer}>
          <Box sx={styles.summaryText}>
            <Typography>Кількість товарів</Typography>
            <Typography sx={styles.price}>{cartCount} шт.</Typography>
          </Box>
          <Divider orientation="horizontal" sx={styles.divider} />
          <Box sx={styles.summaryText}>
            <Typography>Товари на суму</Typography>
            <Typography sx={styles.price}>
              {formatCurrency(totalAmount)} ₴
            </Typography>
          </Box>
          <Box sx={styles.summaryText}>
            <Typography>Знижка</Typography>
            <Typography sx={styles.price}>
              - {formatCurrency(totalDiscount)} ₴
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.totalText}>
          <Typography variant="h6">Загальна сума</Typography>
          <Typography variant="h6" sx={styles.price}>
            {formatCurrency(finalAmount)} ₴
          </Typography>
        </Box>
      </Box>
      <Button
          variant="contained"
          sx={styles.checkoutButton}
          onClick={handleCheckout}
      >
        Перейти до оформлення
      </Button>
    </Box>
  );
};

CartSummary.propTypes = {
  cartCount: PropTypes.number.isRequired,
  totalAmount: PropTypes.number.isRequired,
  totalDiscount: PropTypes.number.isRequired,
  finalAmount: PropTypes.number.isRequired,
};

export default CartSummary;
