import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import {
  removeItem,
  deleteItem,
  deleteAllItems,
} from "../../../store/slices/cartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import { styles } from "./styles";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartCount, totalDiscount, finalAmount, totalAmount, cartItems } =
    useSelector((state) => state.cart);

  if (!cartItems || cartItems.length === 0) {
    return <Typography variant="h6">Корзина пуста</Typography>;
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h4">Корзина</Typography>
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={item.code || index} sx={styles.cartItem}>
            <Box sx={styles.cartItemDetails}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography>Цена: {item.newPrice} грн</Typography>
              <Typography>Количество: {item.quantity}</Typography>
            </Box>
            <Box sx={styles.cartItemActions}>
              <Button
                onClick={() => dispatch(removeItem(item))}
                variant="contained"
                color="secondary"
              >
                -
              </Button>
              <Button
                onClick={() => dispatch(deleteItem(item))}
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                sx={styles.removeButton}
              >
                Удалить
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ marginY: 2 }} />
      <Box sx={styles.totals}>
        <Typography variant="h6">
          Итоговая сумма: {finalAmount.toFixed(2)} грн
        </Typography>
        <Typography variant="h6">
          Общая скидка: {totalDiscount.toFixed(2)} грн
        </Typography>
        <Typography variant="h6">
          Общее количество товаров: {cartCount}
        </Typography>
      </Box>
      <Button
        onClick={() => dispatch(deleteAllItems())}
        variant="contained"
        color="error"
        sx={styles.clearButton}
      >
        Очистить корзину
      </Button>
    </Box>
  );
};

export default Cart;
