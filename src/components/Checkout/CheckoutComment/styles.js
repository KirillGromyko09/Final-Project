export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "16px",
    backgroundColor: "#F5F5F5",
    borderRadius: "8px",
    marginBottom: "16px",
  },
  linkContainer: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginLeft: "8px",
    marginTop: "8px",
  },
  icon: {
    color: "grey",
    cursor: "pointer",
  },
  link: {
    cursor: "pointer",
    textDecoration: "none",
    color: "#000",
  },
  commentBox: {
    display: "flex",
    gap: "8px",
    alignItems: "flex-start",
  },
  commentContainer: {
    maxWidth: "900px",
    width: "100%",
  },
  commentField: {
    width: "100%",
    backgroundColor: "#FFF",
  },
  noCallContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "16px",
  },
  noCallCheckbox: {
    color: "#c0bfbf",
    "&.Mui-checked": {
      color: "#11ac11",
    },
    marginRight: "7px",
  },
  noCallText: {
    fontSize: "14px",
    color: "grey",
  },
};
