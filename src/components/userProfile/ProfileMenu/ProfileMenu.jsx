import React from "react";
import { Box, Button, Typography } from "@mui/material";
import customer from "../../../assets/svg/customer.svg";
import { styles } from "./style.js";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/fav-products");
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.imgContainer}>
        <img src={customer} alt="Image" style={styles.img} />
      </Box>
      <Box>
        <Typography variant="h5">Вітаємо в особистому кабінеті!</Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={handleClick}
          sx={styles.favoriteButton}
        >
          <FavoriteIcon sx={styles.favoriteIcon} />
          <Typography sx={styles.favoriteText}>Обрані товари</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileMenu;
