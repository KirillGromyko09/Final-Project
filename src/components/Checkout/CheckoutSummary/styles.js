export const styles = {
  summary: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "350px",
    padding: "16px",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "16px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  checkoutButton: {
    marginTop: "16px",
    marginBottom: "16px",
    backgroundColor: "#11ac11",
    color: "#fff",
    textAlign: "center",
    padding: "16px 26px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e25c1d",
    },
  },
  changeBonusCard: {
    color: "#11ac11",
    cursor: "pointer",
    textDecoration: "underline",
    marginBottom: "16px",
  },
  bonusInfo: {
    backgroundColor: "#f6f6d1",
    borderRadius: "4px",
    padding: "12px 28px",
    marginBottom: "16px",
  },
  bonusText: {
    display: "flex",
    alignItems: "center",
  },
  bonusCount: {
    color: "#ff5722",
    fontWeight: "bold",
  },
  disclaimer: {
    fontSize: "12px",
    color: "#ff5722",
    marginBottom: "8px",
  },
  summaryDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "8px",
    padding: "16px",
    width: "100%",
  },
  summaryTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "8px",
  },
  summaryText: {
    display: "flex",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
  },
  totalText: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    fontWeight: "bold",
  },
  textField: {
    marginBottom: "16px",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e0e0e0",
      },
    },
  },
  applyButton: {
    backgroundColor: "#11ac11",
    textTransform: "none",
    fontSize: "12px",
    color: "#fff",
    height: "100%",
    textAlign: "center",
    marginLeft: "10px",
    padding: "15px 18px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e25c1d",
    },
  },
  checkbox: {
    color: "#999",
    "&.Mui-checked": {
      color: "#11ac11",
    },
  },
  checkboxLabel: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "16px",
    marginLeft: "24px",
    color: "#999",
    "& .MuiFormControlLabel-label": {
      fontSize: "0.75rem",
    },
  },
  divider: {
    backgroundColor: "#000",
    margin: "8px 0",
    maxWidth: "400px",
    width: "100%",
  },
};
