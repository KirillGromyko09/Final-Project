import React from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import ViewedProductCard from "../ViewedProductCard";
import { styles } from "./style.js";

const ViewedProductsList = () => {
  const viewedProducts = useSelector(
    (state) => state.viewedProducts.viewedProducts,
  );

  return (
    <Box sx={styles.viewedProducts}>
      {viewedProducts.map((product) => (
        <Box key={product.id} sx={styles.productCard}>
          <ViewedProductCard
            imageUrl={product.image}
            title={product.title}
            code={product.id}
            oldPrice={(product.price * 1.1).toFixed(2)}
            discount={10}
            newPrice={product.price}
            bonus={Math.floor(product.price * 0.1).toFixed(2)}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ViewedProductsList;
