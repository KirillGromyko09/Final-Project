import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="cart" element={<CartPage />}></Route>
      <Route path="product/:productId" element={<ProductPage />}></Route>
      <Route path="checkout" element={<CheckoutPage />}></Route>
    </Routes>
  );
}

export default App;
