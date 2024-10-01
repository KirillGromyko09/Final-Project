export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "36px",
    marginTop: "36px",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  favoriteButton: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
    color: "#ff6e00",
    border: "2px solid #ff6f00",
    borderRadius: 15,
    padding: "30px 30px",
    textTransform: "none",
    marginTop: "20px",
    marginBottom: "40px",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: "#ffe0b2",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.7)",
    },
  },
  favoriteIcon: {
    marginRight: 8,
    fontSize: "40px",
  },
  favoriteText: {
    fontSize: 26,
    fontWeight: 500,
    color: "#11ac11",
  },
};
