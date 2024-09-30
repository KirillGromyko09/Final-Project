import React from "react";
import { useGetAllCategoriesQuery } from "../../../store/productsApi/productsApi.js";
import { useNavigate } from "react-router-dom";
import { Box, Grid2, Paper, Typography } from "@mui/material";
import { styles } from "./styles.js";

const CategoriesList = () => {
  const { data: categories, error, isLoading } = useGetAllCategoriesQuery();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong... {error.message}</div>;

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <Box sx={styles.container}>
      <Grid2 container spacing={2}>
        {categories &&
          categories.map((category, index) => (
            <Grid2 size={3} key={index}>
              <Paper
                sx={styles.categoryPaper}
                elevation={3}
                onClick={() => handleCategoryClick(category)}
              >
                <Typography variant="h6" sx={styles.categoryName}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Typography>
              </Paper>
            </Grid2>
          ))}
      </Grid2>
    </Box>
  );
};

export default CategoriesList;
