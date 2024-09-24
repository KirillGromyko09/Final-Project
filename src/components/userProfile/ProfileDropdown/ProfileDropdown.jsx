import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, Button } from "@mui/material";
import {
  AccountCircle,
  ListAlt,
  Favorite,
  Person,
  ExitToApp,
  HomeSharp,
} from "@mui/icons-material";
import { styles } from "./styles";

const ProfileDropdown = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectOption = (route) => {
    if (route === "/logout") {
      onLogout();
    } else {
      navigate(route);
    }
    handleClose();
  };

  return (
    <div style={styles.dropdownContainer}>
      <Button
        aria-controls="profile-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={styles.button}
      >
        <AccountCircle />
        Профіль
      </Button>
      <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={styles.menu}
      >
        <MenuItem
          onClick={() => handleSelectOption("/profile")}
          sx={styles.menuItem}
        >
          <HomeSharp sx={{ marginRight: "10px" }} />
          Мій кабінет
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectOption("/orders")}
          sx={styles.menuItem}
        >
          <ListAlt sx={{ marginRight: "10px" }} />
          Мої замовлення
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectOption("/fav-products")}
          sx={styles.menuItem}
        >
          <Favorite sx={{ marginRight: "10px" }} />
          Обрані товари
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectOption("/personal-data")}
          sx={styles.menuItem}
        >
          <Person sx={{ marginRight: "10px" }} />
          Персональні дані
        </MenuItem>
        <MenuItem
          onClick={() => handleSelectOption("/logout")}
          sx={styles.menuItem}
        >
          <ExitToApp sx={{ marginRight: "10px" }} />
          Вийти
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileDropdown;
