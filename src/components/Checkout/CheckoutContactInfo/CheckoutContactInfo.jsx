import { useState } from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import { TextField, Box, Typography } from "@mui/material";
import validationCheckoutContactForm from "../../../utils/validationSchemas/validationCheckoutContactForm.js";
import InputMask from "react-input-mask";
import { useDispatch, useSelector } from "react-redux";
import { setContactInfo } from "../../../store/slices/orderSlice";
import CheckoutContinueButton from "../../UI/Buttons/CheckoutContinueButton";
import CheckoutCollapsedButton from "../../UI/Buttons/CheckoutCollapsedButton";
import { styles } from "./styles";

const CheckoutContactInfo = ({ onSubmit }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const dispatch = useDispatch();

  const contactInfo = useSelector((state) => state.order.contactInfo);

  const formik = useFormik({
    initialValues: {
      phoneNumber: contactInfo.phoneNumber || "",
      firstName: contactInfo.firstName || "",
      email: contactInfo.email || "",
    },
    validationSchema: validationCheckoutContactForm,
    onSubmit: (values) => {
      dispatch(
        setContactInfo({
          phoneNumber: values.phoneNumber,
          firstName: values.firstName,
          email: values.email,
        }),
      );

      onSubmit(values);
      setIsCollapsed(true);
    },
  });

  const handleChangeClick = () => {
    setIsCollapsed(false);
  };

  const handleProceedClick = () => {
    formik.handleSubmit();
  };

  if (isCollapsed) {
    return (
      <Box sx={styles.collapsedContainer}>
        <Typography variant="h6" sx={styles.collapsedHeaderText}>
          1. Контактна інформація
        </Typography>
        <Box sx={styles.infoButton}>
          <Box>
            <Typography variant="body2" sx={styles.selectedInfo}>
              {contactInfo.phoneNumber
                ? `Телефон: ${contactInfo.phoneNumber}`
                : "Телефон: -"}
            </Typography>
            <Typography variant="body2" sx={styles.selectedInfo}>
              {contactInfo.firstName
                ? `Ім'я: ${contactInfo.firstName}`
                : "Ім'я: -"}
            </Typography>
            <Typography variant="body2" sx={styles.selectedInfo}>
              {contactInfo.email ? `E-mail: ${contactInfo.email}` : "E-mail: -"}
            </Typography>
          </Box>
          <CheckoutCollapsedButton onClick={handleChangeClick} />
        </Box>
      </Box>
    );
  }

  return (
    <form onSubmit={formik.handleSubmit} style={styles.formContainer}>
      <Typography variant="h6" sx={styles.formTitle}>
        1. Контактна інформація
      </Typography>
      <Box sx={styles.phoneNameEmailContainer}>
        <InputMask
          mask="+380 99 999 99 99"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          maskChar={null}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              fullWidth
              variant="outlined"
              label="Номер телефону"
              name="phoneNumber"
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              sx={styles.inputField}
            />
          )}
        </InputMask>
        <TextField
          fullWidth
          variant="outlined"
          label="Ім'я"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
          sx={styles.inputField}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="E-mail"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={styles.inputField}
        />
      </Box>
      <Box sx={styles.buttonBox}>
        <CheckoutContinueButton onClick={handleProceedClick} />
      </Box>
    </form>
  );
};

CheckoutContactInfo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CheckoutContactInfo;
