import routeNames from "./routeNames.js";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../pages/CheckoutPage";
import CategoryPage from "../pages/CategoryPage";

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
];
export default routerObjects;
