import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Typography, Box } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { styles } from "./style.js";

const QuantitySelector = ({ initialQuantity, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, prevQuantity - 1);
      onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <Box sx={styles.quantityContainer}>
      <IconButton
        sx={styles.quantityButton}
        onClick={handleDecrease}
        disabled={quantity <= 1}
      >
        <Remove />
      </IconButton>
      <Typography sx={styles.quantity}>{quantity}</Typography>
      <IconButton sx={styles.quantityButton} onClick={handleIncrease}>
        <Add />
      </IconButton>
    </Box>
  );
};

QuantitySelector.propTypes = {
  initialQuantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default QuantitySelector;
