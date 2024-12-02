export const styles = {
  itemList: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "10px",
    borderBottom: "1px solid #e0e0e0",
  },
  headerText: {
    fontSize: "18px",
  },
  button: {
    display: "flex",
    gap: "2px",
    textTransform: "none",
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
    color: "grey",
    "&:hover": {
      backgroundColor: "#e9e9ec",
    },
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    borderBottom: "1px solid #e0e0e0",
    "&:last-child": {
      borderBottom: "none",
    },
  },
  itemDetails: {
    display: "flex",
    alignItems: "center",
  },
  itemImage: {
    width: "80px",
    height: "auto",
    marginRight: "30px",
    cursor: "pointer",
  },
  itemInfo: {
    width: "400px",
  },
  itemTitle: {
    cursor: "pointer",
  },
  iconText: {
    display: "flex",
    alignItems: "center",
    margin: "8px 0",
  },
  checkIcon: {
    color: "green",
    marginRight: "4px",
  },
  productAvailability: {
    color: "#11ac11",
    fontSize: "14px",
  },
  code: {
    color: "#999",
    fontSize: "14px",
  },
  quantity: {
    color: "#000",
    fontSize: "14px",
  },
  price: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    maxWidth: "170px",
    width: "100%",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "#999",
  },
  newPrice: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  collapsedContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  collapsedHeaderText: {
    fontSize: "14px",
    marginBottom: "20px",
  },
  collapsedItems: {
    display: "flex",
    marginBottom: "20px",
  },
  collapsedItemsButton: {
    display: "flex",
    justifyContent: "space-between",
  },
  collapsedItemImage: {
    width: "80px",
    height: "auto",
    objectFit: "cover",
    margin: "0 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
};
