import { useState } from "react";
import { useGetProductsQuery } from "../../../store/productsApi/productsApi.js";
import ProductCard from "../../Products/ProductCard";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./style";

const ProductList = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(12);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  return (
    <Box sx={styles.productList}>
      {products.slice(0, visibleCount).map((product) => (
        <ProductCard
          key={product.id}
          imageUrl={product.image}
          code={product.id}
          title={product.title}
          rating={product.rating.rate}
          ratingCount={product.rating.count}
          oldPrice={parseFloat((product.price * 1.1).toFixed(2))}
          discount={10}
          newPrice={product.price}
          bonus={Math.floor(product.price * 0.1).toFixed(2)}
        />
      ))}
      {visibleCount < products.length && (
        <Box sx={styles.showMoreContainer}>
          <Button sx={styles.showMoreButton} onClick={handleShowMore}>
            <Typography sx={styles.showMoreText}>Показати більше</Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductList;
