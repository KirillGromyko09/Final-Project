// const styles = {
//   dropdownContainer: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     margin: "20px 0",
//     flexDirection: "column",
//   },
//   dropdownButton: {
//     padding: "10px",
//     fontSize: "16px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   menu: {
//     marginTop: "45px",
//   },
// };
//
// export default styles;
export const styles = {
  dropdownContainer: {
    display: "inline-block",
    position: "relative",
  },
  button: {
    display: "flex",
    gap: "5px",
    height: "64px",
    borderRadius: "0",
    textTransform: "none",
    fontSize: "16px",
    backgroundColor: "#388e3c",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
  arrowIcon: {
    marginLeft: "20px",
  },
  menu: {
    marginTop: "5px",
  },
  menuItem: {
    width: "222px",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
};
