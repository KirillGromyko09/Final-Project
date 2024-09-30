export const styles = {
  footerContainer: {
    padding: "24px 0",
    borderTop: "1px solid #ddd",
  },
  footerContent: {
    display: "flex",
    alignItems: "center",
    width: "1400px",
    height: "inherit",
    margin: "6px auto",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "16px",
    fontSize: "16px",
  },
  text: {
    padding: "0",
    color: "#999",
    marginBottom: "5px",
  },
  phone: {
    color: "#11ac11",
    fontWeight: "bold",
    fontSize: "26px",
    marginBottom: "6px",
  },
  link: {
    textDecoration: "none",
    color: "#999",
    "&:hover": {
      textDecoration: "underline",
      color: "#000",
    },
    "&:active": {
      color: "#11ac11",
    },
    display: "block",
    marginBottom: "12px",
  },
};
