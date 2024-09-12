import * as React from "react";
import { useState } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

const AllCategories = ({ onSelectCity }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    if (onSelectCity) {
      onSelectCity(city);
    }
    handleMouseLeave();
  };

  return (
    <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Button
        aria-controls="cities-menu"
        aria-haspopup="true"
        sx={{ display: "flex", alignItems: "center" }}
      >
        {selectedCity || "Select a city"}
      </Button>
      <Menu
        id="cities-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        MenuListProps={{ onMouseLeave: handleMouseLeave }}
      >
        {cities.map((city, index) => (
          <MenuItem key={index} onClick={() => handleSelectCity(city)}>
            {city}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
export default AllCategories;
