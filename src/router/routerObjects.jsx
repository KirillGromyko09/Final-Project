import routeNames from "./routeNames.js";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../pages/CheckoutPage";

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
];
export default routerObjects;
