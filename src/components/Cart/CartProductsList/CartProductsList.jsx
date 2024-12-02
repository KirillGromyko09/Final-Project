import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, IconButton, Button } from "@mui/material";
import {
  Delete,
  Add,
  Remove,
  FavoriteBorder,
  Favorite,
  CheckSharp,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  removeItem,
  deleteItem,
  deleteAllItems,
} from "../../../store/slices/cartSlice";
import {
  addFavoriteItem,
  removeFavoriteItem,
} from "../../../store/slices/favoritesSlice";
import DeleteAllItemsPopup from "../DeleteItemsPopup";
import { styles } from "./styles";

const ensureNumber = (value) => (isNaN(value) ? 0 : Number(value));

const CartProductsList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const favorites = useSelector((state) => state.favorites.items);
  const items = useSelector((state) => state.cart.items);

  const handleOpenDeletePopup = () => {
    setShowDeletePopup(true);
  };

  const handleCloseDeletePopup = () => {
    setShowDeletePopup(false);
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllItems());
    handleCloseDeletePopup();
  };

  const isItemFavorite = (code) => {
    return favorites.some((fav) => fav.code === code);
  };

  const handleAddFavorite = (item) => {
    if (isItemFavorite(item.code)) {
      dispatch(removeFavoriteItem(item.code));
    } else {
      dispatch(addFavoriteItem(item));
    }
  };

  const handleProductClick = (code) => {
    navigate(`/product/${code}`);
  };

  const handleAddQuantity = (item) => {
    dispatch(addItem({ code: item.code, quantity: 1 }));
  };

  const handleRemoveQuantity = (item) => {
    dispatch(removeItem({ code: item.code }));
  };

  return (
    <Box sx={styles.itemList}>
      <Box sx={styles.header}>
        <Button
          aria-controls="categories-menu"
          aria-haspopup="true"
          sx={styles.button}
          onClick={handleOpenDeletePopup}
        >
          <Delete />
          <Typography>Видалити все</Typography>
        </Button>
      </Box>
      {items.map((item) => {
        const totalOldPrice = (
          ensureNumber(item.oldPrice) * ensureNumber(item.quantity)
        ).toFixed(2);
        const totalNewPrice = (
          ensureNumber(item.newPrice) * ensureNumber(item.quantity)
        ).toFixed(2);
        const isFavorite = isItemFavorite(item.code);

        return (
          <Box key={item.code} sx={styles.item}>
            <Box sx={styles.itemDetails}>
              <img
                src={item.imageUrl}
                alt={item.title}
                style={styles.itemImage}
                onClick={() => handleProductClick(item.code)}
              />
              <Box sx={styles.itemInfo}>
                <Typography
                  variant="body1"
                  onClick={() => handleProductClick(item.code)}
                  sx={{ cursor: "pointer" }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={styles.code}>
                  Код: {item.code}
                </Typography>
                <Box sx={styles.iconText}>
                  <CheckSharp sx={styles.checkIcon} />
                  <Typography variant="body1" sx={styles.productAvailability}>
                    Можна забрати сьогодні
                  </Typography>
                </Box>
                <Box sx={styles.favDelete}>
                  <Button
                    aria-controls="categories-menu"
                    aria-haspopup="true"
                    onClick={() => handleAddFavorite(item)}
                    sx={styles.button}
                  >
                    {isFavorite ? (
                      <Favorite sx={styles.iconHeart} />
                    ) : (
                      <FavoriteBorder sx={styles.iconHeart} />
                    )}
                    <Typography variant="body1" sx={styles.code}>
                      {isFavorite ? "В обраному" : "В обране"}
                    </Typography>
                  </Button>
                  <Button
                    aria-controls="categories-menu"
                    aria-haspopup="true"
                    onClick={() => dispatch(deleteItem(item))}
                    sx={styles.button}
                  >
                    <Delete sx={styles.icon} />
                    <Typography variant="body1" sx={styles.code}>
                      {" "}
                      Видалити{" "}
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box sx={styles.quantityContainer}>
              <IconButton
                onClick={() => handleRemoveQuantity(item)}
                disabled={item.quantity <= 1}
                sx={styles.quantityButton}
              >
                <Remove />
              </IconButton>
              <Typography sx={styles.quantity}>{item.quantity}</Typography>
              <IconButton
                onClick={() => handleAddQuantity(item)}
                sx={styles.quantityButton}
              >
                <Add />
              </IconButton>
            </Box>
            <Box sx={styles.itemActions}>
              <Box sx={styles.price}>
                <Box sx={styles.oldDiscount}>
                  <Typography variant="body2" sx={styles.oldPrice}>
                    {totalOldPrice} ₴
                  </Typography>
                  <Typography variant="body2" sx={styles.discount}>
                    -{ensureNumber(item.discount)}%
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={styles.newPrice}>
                    {totalNewPrice} ₴
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
      {showDeletePopup && (
        <DeleteAllItemsPopup
          onClose={handleCloseDeletePopup}
          onDelete={handleDeleteAll}
        />
      )}
    </Box>
  );
};

export default CartProductsList;
