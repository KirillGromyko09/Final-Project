export const styles = {
  productList: {
    display: "flex",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    gap: "10px",
  },
  showMoreContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "30px 0",
  },
  showMoreButton: {
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "8x",
    padding: "10px 70px",
    "&:hover": {
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
  },
  showMoreText: {
    fontSize: "14px",
  },
  addIcon: {
    color: "#000",
  },
};
