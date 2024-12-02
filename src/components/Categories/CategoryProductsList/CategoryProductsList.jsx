import { useParams } from "react-router-dom";
import { useGetAllProductsByCategoryQuery } from "../../../store/productsApi/productsApi.js";
import { Box, Typography } from "@mui/material";
import ProductCard from "../../Products/ProductCard";
import { styles } from "./style.js";

const CategoryProductsList = () => {
  const { categoryName } = useParams();
  const {
    data: products,
    error,
    isLoading,
  } = useGetAllProductsByCategoryQuery({ category: categoryName, limit: 10 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  return (
    <Box>
      <Typography variant="h4" sx={styles.header}>
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
      </Typography>
      <Box sx={styles.productList}>
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              imageUrl={product.image}
              code={product.id}
              title={product.title}
              rating={product.rating.rate}
              ratingCount={product.rating.count}
              oldPrice={(product.price * 1.1).toFixed(2)}
              discount={10}
              newPrice={product.price}
              bonus={Math.floor(product.price * 0.1).toFixed(2)}
            />
          ))}
      </Box>
    </Box>
  );
};

export default CategoryProductsList;
