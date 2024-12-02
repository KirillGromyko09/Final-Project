import PropTypes from "prop-types";
import { Button } from "@mui/material";
import { styles } from "./styles";

const CheckoutContinueButton = ({ onClick }) => {
  return (
    <Button variant="contained" sx={styles.continueButton} onClick={onClick}>
      Продовжити оформлення
    </Button>
  );
};

CheckoutContinueButton.propTypes = {
  onClick: PropTypes.func,
};

export default CheckoutContinueButton;
