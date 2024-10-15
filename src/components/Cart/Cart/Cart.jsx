import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import CartProductsList from "../CartProductsList";
import CartSummary from "../CartSummary";
import CartAuth from "../CartAuth";
import { loadUserFromCookies } from "../../../store/slices/authSlice.js";
import { styles } from "./styles";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalAmount, totalDiscount, finalAmount, cartCount } =
    useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(loadUserFromCookies());
  }, [dispatch]);

  return (
    <Box>
      <Typography variant="h4" gutterBottom sx={styles.text}>
        Кошик
      </Typography>
      <Box sx={styles.cartContainer}>
        {items.length === 0 ? (
          <Box sx={styles.emptyCart}>
            <Typography variant="h6">Кошик порожній</Typography>
          </Box>
        ) : (
          <>
            <Box sx={styles.itemListContainer}>
              <CartProductsList items={items} />
            </Box>
            <Box>
              {isAuthenticated ? (
                <CartSummary
                  cartCount={cartCount}
                  totalAmount={totalAmount}
                  totalDiscount={totalDiscount}
                  finalAmount={finalAmount}
                />
              ) : (
                <CartAuth />
              )}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
