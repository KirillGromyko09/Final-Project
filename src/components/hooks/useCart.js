import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/slices/cartSlice.js";

const useCart = (product) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items) || [];

  const isInCart = product
    ? cartItems.some((item) => item.code === product.code)
    : false;

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return {
    isInCart,
    handleAddToCart,
  };
};

export default useCart;
