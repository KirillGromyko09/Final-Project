// export const styles = {
//   button: {
//     width: 300,
//     display: "flex",
//     alignItems: "center",
//     backgroundColor: "transparent",
//     border: "1px solid #ccc",
//     borderRadius: 4,
//     padding: "8px 16px",
//     "&:hover": {
//       backgroundColor: "rgba(0, 0, 0, 0.1)",
//     },
//   },
// };
//
// export const getDropdownStyle = (isHovered) => ({
//   width: 300,
//   backgroundColor: isHovered ? "rgba(255, 255, 255, 0.8)" : "transparent",
//   padding: "8px",
//   borderRadius: "4px",
//   boxShadow: isHovered ? "0 0 10px rgba(0, 0, 0, 0.1)" : "none",
//   transition: "background-color 0.3s ease",
// });
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
