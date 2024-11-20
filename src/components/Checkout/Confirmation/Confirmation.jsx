import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Confirmation = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const address = useSelector((state) => state.order.address);
  const deliveryMethod = useSelector((state) => state.order.deliveryMethod);
  const paymentMethod = useSelector((state) => state.order.paymentMethod);

  return (
    <Box>
      <Typography variant="h4">Order Confirmation</Typography>
      <Typography variant="h6">Delivery Address</Typography>
      <Typography>
        {address.city}, {address.warehouse}
      </Typography>
      <Typography variant="h6">Delivery Method</Typography>
      <Typography>
        {deliveryMethod.name} - {deliveryMethod.cost}₴ ({deliveryMethod.time})
      </Typography>
      <Typography variant="h6">Payment Method</Typography>
      <Typography>{paymentMethod.name}</Typography>
      <Typography variant="h6">Cart Items</Typography>
      {cartItems.map((item) => (
        <Box key={item.id}>
          <Typography>{item.name}</Typography>
          <Typography>
            {item.quantity} x {item.price}₴
          </Typography>
        </Box>
      ))}
      <Button variant="contained">Place Order</Button>
    </Box>
  );
};

export default Confirmation;
