import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import CategoryPage from "./pages/CategoryPage";
import ProfilePage from "./pages/ProfilePage";
import FavProductsPage from "./pages/FavProductsPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/fav-products" element={<FavProductsPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
