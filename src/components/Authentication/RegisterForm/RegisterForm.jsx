import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  authFailure,
  registerSuccess,
} from "../../../store/slices/authSlice.js";
import storageService from "./../../../utils/storage/StorageService.js";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import {
  Close as CloseIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { styles } from "./styles.js";

const validationRegisterForm = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Ім'я повинно містити щонайменше 2 символи")
    .required("Ім'я обов'язкове"),
  lastName: Yup.string()
    .min(2, "Прізвище повинно містити щонайменше 2 символи")
    .required("Прізвище обов'язкове"),
  phoneNumber: Yup.string()
    .matches(
      /^\+380 \d{2} \d{3} \d{2} \d{2}$/,
      "Невірний формат номера телефону",
    )
    .required("Номер телефону обов'язковий"),
  email: Yup.string()
    .email("Невірний формат електронної пошти")
    .required("Електронна пошта обов'язкова"),
  password: Yup.string()
    .min(6, "Пароль повинен містити не менше 6 символів")
    .required("Пароль обов'язковий"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Паролі повинні співпадати")
    .required("Підтвердження паролю обов'язкове"),
});

const RegisterForm = ({ onClose, onShowLogin }) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      storageService.saveUserData(values);
      dispatch(
        registerSuccess({ email: values.email, password: values.password }),
      );
      onClose();
    } catch (error) {
      setErrors({ submit: error.message });
      dispatch(authFailure(error.message));
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Box sx={styles.popupContainer}>
      <Box sx={styles.popupHeader}>
        <Typography variant="h6">Реєстрація</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationRegisterForm}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Box sx={styles.popupContent}>
              <Field
                as={TextField}
                name="firstName"
                label="Ім'я"
                variant="outlined"
                fullWidth
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                sx={styles.inputField}
              />
              <Field
                as={TextField}
                name="lastName"
                label="Прізвище"
                variant="outlined"
                fullWidth
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
                sx={styles.inputField}
              />
              <Field name="phoneNumber">
                {({ field, form }) => (
                  <InputMask
                    mask="+380 99 999 99 99"
                    value={field.value}
                    onChange={(e) => {
                      form.setFieldValue(field.name, e.target.value);
                    }}
                    maskChar={null}
                  >
                    {(inputProps) => (
                      <TextField
                        {...inputProps}
                        label="Номер телефону"
                        variant="outlined"
                        fullWidth
                        error={
                          touched.phoneNumber && Boolean(errors.phoneNumber)
                        }
                        helperText={touched.phoneNumber && errors.phoneNumber}
                        sx={styles.inputField}
                      />
                    )}
                  </InputMask>
                )}
              </Field>
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                sx={styles.inputField}
              />
              <Field
                as={TextField}
                name="password"
                label="Пароль"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                sx={styles.inputField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Field
                as={TextField}
                name="confirmPassword"
                label="Підтвердження паролю"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                error={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
                sx={styles.inputField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              {errors.submit && (
                <Typography variant="body2" color="error">
                  {errors.submit}
                </Typography>
              )}
            </Box>
            <Box sx={styles.popupActions}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                fullWidth
                sx={styles.submitButton}
              >
                Зареєструватися
              </Button>
            </Box>
            <Box sx={styles.alternativeLogin}>
              <Typography
                variant="body2"
                align="center"
                sx={styles.registerLink}
                onClick={onShowLogin}
              >
                Увійти
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

RegisterForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onShowLogin: PropTypes.func.isRequired,
};

export default RegisterForm;
