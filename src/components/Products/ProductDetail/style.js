export const styles = {
  productDetailContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "16px",
    maxHeight: "800px",
  },
  imageContainer: {
    display: "flex",
    flex: "0 0 50%",
    textAlign: "center",
    padding: "16px",
  },
  image: {
    width: "100%",
    maxWidth: "400px",
    height: "auto",
    objectFit: "contain",
    objectPosition: "center",
  },
  infoContainer: {
    flex: "1",
    padding: "16px",
    overflowY: "auto",
  },
  titleFavorite: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
  iconHeart: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  ratingCode: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "30px",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  ratingStars: {
    color: "#FFA500",
    marginRight: "4px",
  },
  ratingCount: {
    color: "#999",
    fontSize: "12px",
  },
  code: {
    color: "#999",
    fontSize: "14px",
  },
  description: {
    fontSize: "18px",
    marginBottom: "36px",
  },
  priceButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  price: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "30px",
  },
  oldDiscount: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    marginRight: "8px",
  },
  discount: {
    color: "#d32f2f",
    fontWeight: "bold",
    marginRight: "8px",
  },
  newPrice: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  buttonsContainer: {
    display: "flex",
    alignItems: "center",
  },
  buyButton: {
    backgroundColor: "#4caf50",
    color: "#fff",
    textAlign: "center",
    padding: "16px 26px",
    marginRight: "30px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e25c1d",
    },
  },
  bonus: {
    fontSize: "12px",
    color: "#999",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "20px",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  info: {
    fontSize: "14px",
  },
  iconInfo: {
    color: "#379424",
  },
  viewedProductsContainer: {
    marginTop: "30px",
    display: "flex",
    flexDirection: "column",
  },
};
