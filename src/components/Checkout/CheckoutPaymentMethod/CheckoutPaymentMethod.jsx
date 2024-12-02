import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import CheckoutContinueButton from "../../UI/Buttons/CheckoutContinueButton";
import CheckoutCollapsedButton from "../../UI/Buttons/CheckoutCollapsedButton";
import payments from "../../../assets/svg/checkout-payment-title.svg";
import { styles } from "./styles";
import { useDispatch } from "react-redux";
import { setPaymentMethod } from "../../../store/slices/orderSlice";

const CheckoutPaymentMethod = ({ paymentMethods, onPaymentMethodChange }) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedMethod = JSON.parse(localStorage.getItem("paymentMethod"));
    if (savedMethod) {
      setSelectedMethod(savedMethod);
    }
  }, []);

  const handleMethodChange = (event) => {
    const method = paymentMethods.find(
      (method) => method.id === event.target.value,
    );
    setSelectedMethod(method);
    onPaymentMethodChange(method);
  };

  const handleChangeClick = () => {
    setIsCollapsed(false);
  };

  const handleProceedClick = () => {
    if (selectedMethod) {
      localStorage.setItem("paymentMethod", JSON.stringify(selectedMethod));
      dispatch(setPaymentMethod(selectedMethod));
    }
    setIsCollapsed(true);
  };

  if (isCollapsed) {
    return (
      <Box sx={styles.collapsedContainer}>
        <Box>
          <Typography variant="h6" sx={styles.collapsedHeaderText}>
            3. Спосіб оплати
          </Typography>
          <Box>
            <img src={payments} alt="payments" style={styles.paymentIcon} />
          </Box>
        </Box>
        <CheckoutCollapsedButton onClick={handleChangeClick} />
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.title}>
        Спосіб оплати
      </Typography>
      <RadioGroup
        value={selectedMethod?.id || ""}
        onChange={handleMethodChange}
        sx={styles.radioGroup}
      >
        {paymentMethods.map((method) => (
          <Box key={method.id} sx={styles.methodBox}>
            <FormControlLabel
              value={method.id}
              control={<Radio sx={styles.radio} />}
              label={
                <Box>
                  <Box sx={styles.labelBox}>
                    <Typography sx={styles.methodName}>
                      {method.name}
                    </Typography>
                    <img
                      src={method.image}
                      alt={method.name}
                      style={{
                        marginRight: "10px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  </Box>
                  {method.subLabel && (
                    <Typography sx={styles.methodSubLabel}>
                      {method.subLabel}
                    </Typography>
                  )}
                  <Typography sx={styles.methodPrice}>
                    {method.price || ""}
                  </Typography>
                </Box>
              }
            />
            {method.id === selectedMethod?.id && method.warning && (
              <Typography sx={styles.warningText}>{method.warning}</Typography>
            )}
          </Box>
        ))}
      </RadioGroup>
      <Box sx={styles.buttonBox}>
        <CheckoutContinueButton onClick={handleProceedClick} />
      </Box>
    </Box>
  );
};

CheckoutPaymentMethod.propTypes = {
  paymentMethods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subLabel: PropTypes.string,
      price: PropTypes.string,
      warning: PropTypes.string,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onPaymentMethodChange: PropTypes.func.isRequired,
};

export default CheckoutPaymentMethod;
