export const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    backgroundColor: "#F5F5F5",
    borderRadius: "8px",
  },
  checkbox: {
    marginRight: "8px",
    color: "#c0bfbf",
    "&.Mui-checked": {
      color: "#11ac11",
    },
  },
  text: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#333",
  },
  infoIcon: {
    marginLeft: "8px",
    fontSize: "16px",
    color: "#999",
  },
  expandedContainer: {
    padding: "16px",
    borderRadius: "8px",
    marginTop: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  formLabel: {
    fontSize: "14px",
    color: "#333",
    marginBottom: "8px",
    marginLeft: "10px",
  },
  input: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
    padding: "8px",
  },
  inputField: {
    width: "80px",
    fontSize: "16px",
    borderRadius: "4px",
    textAlign: "center",
  },
  balanceButton: {
    backgroundColor: "#11ac11",
    color: "#FFF",
    borderRadius: "8px",
    width: "200px",
    height: "40px",
    padding: "5px",
    fontSize: "14px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#e25c1d",
    },
  },
  warningText: {
    fontSize: "12px",
    color: "#F44336",
    marginLeft: "10px",
  },
};
