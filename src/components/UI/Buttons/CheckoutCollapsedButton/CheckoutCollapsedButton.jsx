import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { styles } from "./styles";

const CheckoutCollapsedButton = ({ onClick }) => {
  return (
    <Button sx={styles.collapsedButton} onClick={onClick}>
      Змінити
    </Button>
  );
};

CheckoutCollapsedButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CheckoutCollapsedButton;
