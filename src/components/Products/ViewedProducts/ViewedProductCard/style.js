export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "10px",
    width: "200px",
    maxHeight: "350px",
    height: "100%",
    fontFamily: "Arial, sans-serif",
    position: "relative",
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "8px",
    overflow: "hidden",
    cursor: "pointer",
  },
  image: {
    height: "140px",
    width: "auto",
    borderRadius: "8px",
    objectFit: "contain",
    objectPosition: "center",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  title: {
    fontWeight: "bold",
    fontSize: "11px",
    marginBottom: "4px",
    cursor: "pointer",
  },
  code: {
    color: "#999",
    fontSize: "11px",
    marginBottom: "8px",
  },
  priceButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "8px 0",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: "8px",
  },
  oldDiscount: {
    display: "flex",
    alignItems: "center",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
    fontSize: "12px",
    marginRight: "8px",
  },
  discount: {
    color: "#d32f2f",
    fontWeight: "bold",
  },
  newPrice: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  bonus: {
    fontSize: "11px",
    color: "#999",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e25c1d",
    },
    "& .css-9tj150-MuiButton-endIcon": {
      marginRight: "8px",
    },
  },
  iconCart: {
    width: "25px",
    height: "25px",
  },
};
