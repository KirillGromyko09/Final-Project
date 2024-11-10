export const styles = {
  popupContainer: {
    position: "fixed",
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "400px",
    backgroundColor: "white",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "16px",
  },
  popupHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  popupContent: {
    display: "flex",
    flexDirection: "column",
    margin: "16px 0",
  },
  inputField: {
    margin: "8px 0",
  },
  popupActions: {
    display: "flex",
    flexDirection: "column",
    marginTop: "16px",
  },
  submitButton: {
    backgroundColor: "#11ac11",
    color: "#fff",
    textAlign: "center",
    padding: "16px 26px",
    marginRight: "10px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e25c1d",
    },
  },
  alternativeLogin: {
    marginTop: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  registerLink: {
    textDecoration: "underline",
    cursor: "pointer",
  },
};
