export const styles = {
  appBar: {
    position: "static",
    backgroundColor: "#fff",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    width: "1400px",
    height: "inherit",
    margin: "6px auto",
    justifyContent: "space-between",
    padding: "0 16px",
  },
  cityDropdown: {
    display: "flex",
    alignItems: "left",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px",
    marginRight: "8px",
  },
  buttonBox: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    borderRadius: 15,
    color: "#000",
    textTransform: "none",
    margin: "0 8px",
  },
  buttonAccent: {
    borderRadius: 15,
    backgroundColor: "#ff0000",
    color: "#fff",
    textTransform: "none",
    margin: "0 8px",
    "&:hover": {
      backgroundColor: "#cc0000",
    },
  },
  buttonHelp: {
    borderRadius: 15,
    color: "#ff6f00",
    textTransform: "none",
    margin: "0 8px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  buttonLangAccent: {
    color: "#fff",
    backgroundColor: "#11ac11",
    borderRadius: 15,
  },
  buttonLang: {
    color: "#000",
    borderRadius: 15,
  },
};
