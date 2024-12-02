import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Box, Typography, Button } from "@mui/material";
import { CheckSharp, Edit } from "@mui/icons-material";
import CheckoutCollapsedButton from "../../UI/Buttons/CheckoutCollapsedButton";
import CheckoutContinueButton from "../../UI/Buttons/CheckoutContinueButton";
import { styles } from "./styles";

const CheckoutProductsList = ({ items }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleEditClick = () => {
    navigate("/cart");
  };

  const handleProductClick = (code) => {
    navigate(`/product/${code}`);
  };

  const handleChangeClick = () => {
    setIsCollapsed(false);
  };

  const handleProceedClick = () => {
    setIsCollapsed(true);
  };

  if (isCollapsed) {
    return (
      <Box sx={styles.collapsedContainer}>
        <Typography variant="h6" sx={styles.collapsedHeaderText}>
          Ваше замовлення
        </Typography>
        <Box sx={styles.collapsedItemsButton}>
          <Box sx={styles.collapsedItems}>
            {items.map((item) => (
              <img
                key={item.id}
                src={item.imageUrl}
                alt={item.title}
                style={styles.collapsedItemImage}
                onClick={() => handleProductClick(item.code)}
              />
            ))}
          </Box>
          <CheckoutCollapsedButton onClick={handleChangeClick} />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={styles.itemList}>
      <Box sx={styles.header}>
        <Typography variant="h6" sx={styles.headerText}>
          Ваше замовлення
        </Typography>
        <Button
          aria-controls="categories-menu"
          aria-haspopup="true"
          sx={styles.button}
          onClick={handleEditClick}
        >
          <Edit />
          <Typography>Редагувати</Typography>
        </Button>
      </Box>
      {items.map((item) => {
        const totalOldPrice = (item.oldPrice * item.quantity).toFixed(2);
        const totalNewPrice = (item.newPrice * item.quantity).toFixed(2);

        return (
          <Box key={item.id} sx={styles.item}>
            <Box sx={styles.itemDetails}>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={styles.itemImage}
                onClick={() => handleProductClick(item.code)}
              />
              <Box sx={styles.itemInfo}>
                <Typography
                  variant="body1"
                  style={styles.itemTitle}
                  onClick={() => handleProductClick(item.code)}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" style={styles.code}>
                  Код: {item.code}
                </Typography>
                <Box sx={styles.iconText}>
                  <CheckSharp sx={styles.checkIcon} />
                  <Typography variant="body1" sx={styles.productAvailability}>
                    Можна забрати сьогодні
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.quantity}>
              <Typography variant="body2">{item.quantity} шт.</Typography>
            </Box>
            <Box sx={styles.price}>
              <Typography variant="body2" sx={styles.oldPrice}>
                {totalOldPrice} ₴
              </Typography>
              <Typography variant="body1" sx={styles.newPrice}>
                {totalNewPrice} ₴
              </Typography>
            </Box>
          </Box>
        );
      })}
      <Box sx={styles.buttonBox}>
        <CheckoutContinueButton onClick={handleProceedClick} />
      </Box>
    </Box>
  );
};

CheckoutProductsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      oldPrice: PropTypes.number.isRequired,
      newPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default CheckoutProductsList;
