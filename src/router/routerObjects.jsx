import routeNames from "./routeNames.js";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import ProductPage from "../pages/ProductPage";
import CheckoutPage from "../pages/CheckoutPage";
import CategoryPage from "../pages/CategoryPage";
import ProfilePage from "../pages/ProfilePage/index.js";
import FavProductsPage from "../pages/FavProductsPage/index.js";

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
];
export default routerObjects;
