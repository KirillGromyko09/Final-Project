import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import styles from "./styles";
import { useGetAllCategoriesQuery } from "../../../store/productsApi/productsApi.js";

const CatalogDropdown = () => {
  const { data: categories, error, isLoading } = useGetAllCategoriesQuery();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (categories && categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [categories]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setAnchorEl(null);
  };

  const handleButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  if (isLoading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  return (
    <div style={styles.dropdownContainer}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleButtonClick}
        style={styles.dropdownButton}
      >
        {selectedCategory || "Select Category"}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        style={styles.menu}
      >
        {categories.map((category) => (
          <MenuItem
            key={category}
            selected={category === selectedCategory}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CatalogDropdown;
