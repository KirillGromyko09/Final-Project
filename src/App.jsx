import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import AddressPage from "./pages/CheckoutPages";
import CategoryPage from "./pages/CategoryPage";
import ProfilePage from "./pages/ProfilePage";
import FavProductsPage from "./pages/FavProductsPage/index.js";
import DeliveryPage from "./pages/CheckoutPages/DeliveryPage.jsx";
import PaymentPage from "./pages/CheckoutPages/PaymentPage.jsx";
import ConfirmationPage from "./pages/CheckoutPages/ConfirmationPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/checkout" element={<AddressPage />} />
      <Route path="/category/:categoryName" element={<CategoryPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/fav-products" element={<FavProductsPage />} />
        <Route path="/address" component={AddressPage} />
        <Route path="/delivery" component={DeliveryPage} />
        <Route path="/payment" component={PaymentPage} />
        <Route path="/confirmation" component={ConfirmationPage} />
    </Routes>
  );
}

export default App;
