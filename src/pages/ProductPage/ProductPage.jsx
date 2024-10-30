import React from "react";
import BaseTemplate from "../../templates/BaseTemplate";
import ProductDetail from "../../components/Products/ProductDetail";
import { Container } from "@mui/material";
import { useGetProductsQuery } from "../../store/productsApi/productsApi.js";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product</div>;

  const productId = parseInt(id, 10);

  const product = products.find((product) => product.id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <BaseTemplate
      className="home-page"
      showMainHeader={true}
      showCartHeader={false}
      showBottomHeader={true}
      showTopFooter={true}
      showMainFooter={true}
      showBottomFooter={true}
    >
      <Container>
        <ProductDetail
          imageUrl={product.image}
          code={product.id}
          title={product.title}
          description={product.description}
          rating={product.rating.rate}
          ratingCount={product.rating.count}
          oldPrice={parseFloat((product.price * 1.1).toFixed(2))}
          discount={10}
          newPrice={product.price}
          bonus={Math.floor(product.price * 0.1).toFixed(2)}
        />
      </Container>
    </BaseTemplate>
  );
};

export default ProductPage;
