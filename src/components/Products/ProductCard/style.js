export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    width: "330px",
    fontFamily: "Arial, sans-serif",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    maxHeight: "400px",
    height: "auto",
    marginBottom: "16px",
  },
  image: {
    borderRadius: "8px",
    objectFit: "contain",
    objectPosition: "center",
    width: "190px",
    height: "240px",
    cursor: "pointer",
  },
  code: {
    color: "#999",
    fontSize: "14px",
    marginBottom: "8px",
  },
  title: {
    fontWeight: "bold",
    fontSize: "16px",
    marginBottom: "5px",
    cursor: "pointer",
  },
  codeFavorite: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    display: "flex",
    alignItems: "center",
    marginBottom: "25px",
  },
  ratingStars: {
    color: "#FFA500",
    marginRight: "4px",
  },
  ratingCount: {
    color: "#999",
    fontSize: "12px",
  },
  paymentMethods: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    marginBottom: "25px",
  },
  priceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  price: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  bonus: {
    fontSize: "12px",
    color: "#999",
  },
  button: {
    backgroundColor: "#11ac11",
    color: "#fff",
    textAlign: "center",
    padding: "16px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#ea4e06",
    },
  },
  icon: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
  },
  iconCart: {
    width: "25px",
    height: "25px",
    paddingRight: "10px",
  },
};
