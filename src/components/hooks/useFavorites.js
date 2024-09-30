import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavoriteItem,
  removeFavoriteItem,
  loadFavFromLS,
} from "../../store/slices/favoritesSlice.js";

const useFavorites = (code, product) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.items || []);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((fav) => fav.code === code),
  );

  useEffect(() => {
    dispatch(loadFavFromLS());
  }, [dispatch]);

  const handleToggleFavorite = (showSnackbarWithMessage) => {
    if (isFavorite) {
      dispatch(removeFavoriteItem(code));
      showSnackbarWithMessage("Товар успішно видалений з обраного");
    } else {
      dispatch(addFavoriteItem(product));
      showSnackbarWithMessage("Товар успішно доданий до обраного");
    }
    setIsFavorite(!isFavorite);
  };

  return {
    isFavorite,
    handleToggleFavorite,
  };
};

export default useFavorites;
