import routeNames from "./routeNames.js";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import AddressPage from "../pages/CheckoutPages";
import CategoryPage from "../pages/CategoryPage";
import ProfilePage from "../pages/ProfilePage/index.js";
import FavProductsPage from "../pages/FavProductsPage/index.js";
import DeliveryPage from "../pages/CheckoutPages/DeliveryPage.jsx";
import ConfirmationPage from "../pages/CheckoutPages/ConfirmationPage.jsx";
import PaymentPage from "../pages/CheckoutPages/PaymentPage.jsx";
import CheckoutPage from "../pages/CheckoutPages/CheckoutPage.jsx";

const routerObjects = [
  {
    id: 1,
    path: routeNames.HomePage,
    element: HomePage,
  },
  {
    id: 2,
    path: routeNames.CartPage,
    element: CartPage,
  },
  {
    id: 3,
    path: routeNames.ProductPage,
    element: ProductPage,
  },
  {
    id: 4,
    path: routeNames.CheckoutPage,
    element: CheckoutPage,
  },
  {
    id: 5,
    path: routeNames.CategoryPage,
    element: CategoryPage,
  },
  {
    id: 6,
    path: routeNames.ProfilePage,
    element: ProfilePage,
  },
  {
    id: 7,
    path: routeNames.FavProductsPage,
    element: FavProductsPage,
  },
  {
    id: 8,
    path: routeNames.DeliveryPage,
    element: DeliveryPage,
  },
  {
    id: 9,
    path: routeNames.AddressPage,
    element: AddressPage,
  },
  {
    id: 10,
    path: routeNames.ConfirmationPage,
    element: ConfirmationPage,
  },
  {
    id: 11,
    path: routeNames.PaymentPage,
    element: PaymentPage,
  },
];
export default routerObjects;
