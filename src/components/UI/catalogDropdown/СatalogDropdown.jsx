import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { styles } from "./styles";
import { useGetAllCategoriesQuery } from "../../../store/productsApi/productsApi.js";
import { useNavigate } from "react-router-dom";
import { KeyboardArrowDownSharp, ViewList } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
//
// const CatalogDropdown = () => {
//   const { data: categories, error, isLoading } = useGetAllCategoriesQuery();
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [anchorEl, setAnchorEl] = useState(null);
//
//   useEffect(() => {
//     if (categories && categories.length > 0) {
//       setSelectedCategory(categories[0]);
//     }
//   }, [categories]);
//
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setAnchorEl(null);
//   };
//
//   const handleButtonClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//
//   if (isLoading) return <p>Loading categories...</p>;
//   if (error) return <p>Error loading categories: {error.message}</p>;
//
//   return (
//     <div style={styles.dropdownContainer}>
//       <Button
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleButtonClick}
//         style={styles.dropdownButton}
//       >
//         {selectedCategory || "Select Category"}
//       </Button>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={() => setAnchorEl(null)}
//         style={styles.menu}
//       >
//         {categories.map((category) => (
//           <MenuItem
//             key={category}
//             selected={category === selectedCategory}
//             onClick={() => handleCategoryClick(category)}
//           >
//             {category}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// };
//
// export default CatalogDropdown;

const CatalogDropdown = () => {
  const {
    data: categories = [],
    error,
    isLoading,
  } = useGetAllCategoriesQuery();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleSelectCategory = (category) => {
    navigate(`/category/${category}`);
    handleMouseLeave();
  };

  if (isLoading) return <CircularProgress />;
  if (error) return <p>Error loading categories</p>;

  return (
    <Box
      style={styles.dropdownContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button
        aria-controls="categories-menu"
        aria-haspopup="true"
        sx={styles.button}
      >
        <ViewList />
        Каталог товарів
        <KeyboardArrowDownSharp sx={styles.arrowIcon} />
      </Button>
      <Menu
        id="categories-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMouseLeave}
        MenuListProps={{ onMouseLeave: handleMouseLeave }}
        sx={styles.menu}
      >
        {Array.isArray(categories) &&
          categories.map((category, index) => (
            <MenuItem
              key={index}
              onClick={() => handleSelectCategory(category)}
              sx={styles.menuItem}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default CatalogDropdown;
