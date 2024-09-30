export const styles = {
  container: {
    padding: "60px",
  },
  categoryPaper: {
    textAlign: "center",
    padding: "10px",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "box-shadow 0.3s, background-color 0.3s",
    "&:hover": {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
      backgroundColor: "#f4f4f4",
    },
  },
  categoryName: {
    fontWeight: "bold",
    cursor: "pointer",
  },
};
