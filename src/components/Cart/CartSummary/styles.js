export const styles = {
  summary: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "350px",
  },
  checkoutButton: {
    marginTop: "16px",
    marginBottom: "16px",
    backgroundColor: "#4caf50",
    color: "#fff",
    textAlign: "center",
    padding: "16px 26px",
    borderRadius: "4px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#e25c1d",
    },
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
    marginBottom: "32px",
  },
  divider: {
    backgroundColor: "#000",
    margin: "8px 0",
    maxWidth: "320px",
    width: "100%",
  },
  summaryText: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "16px",
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
};
