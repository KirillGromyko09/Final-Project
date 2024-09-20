export const styles = {
  appBar: {
    position: "static",
    backgroundColor: "#11ac11",
    boxShadow: "none",
    transition: "position 0.3s ease",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "1400px",
    margin: "auto",
    padding: "0 16px",
  },
  rightBox: {
    display: "flex",
    alignItems: "center",
  },
  divider: {
    backgroundColor: "#fff",
    margin: "0 16px",
    width: "2px",
  },
  iconButtonAuth: {
    textTransform: "none",
    backgroundColor: "#388e3c",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
  iconButton: {
    backgroundColor: "#4caf50",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
  badge: {
    "& .css-dlwkee-MuiBadge-badge": {
      backgroundColor: "#ff6f00",
    },
  },
  amountText: {
    color: "#fff",
    marginLeft: "8px",
  },
};
