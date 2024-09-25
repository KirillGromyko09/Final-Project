import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { authFailure, loginSuccess } from "../../../store/slices/authSlice.js";
import storageService from "../../../utils/storage/StorageService.js";
import * as Yup from "yup";
import {
  Close as CloseIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { styles } from "./styles.js";
import PropTypes from "prop-types";

const validationLoginForm = Yup.object().shape({
  login: Yup.string()
    .email("Неправильний формат електронної пошти")
    .trim()
    .required("Логін є обов'язковим"),
  password: Yup.string()
    .min(6, "Пароль повинен містити щонайменше 6 символів")
    .trim()
    .required("Пароль є обов'язковим"),
});

const LoginForm = ({ onClose, onShowRegister }) => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const { error } = useSelector((state) => state.auth);
  return (
    <Box sx={styles.popupContainer}>
      <Box sx={styles.popupHeader}>
        <Typography variant="h6">Вхід</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Formik
        initialValues={{ login: "", password: "" }}
        validationSchema={validationLoginForm}
        onSubmit={(values, { setSubmitting }) => {
          const userData = storageService.getUserData();
          if (
            userData &&
            values.login === userData.email &&
            values.password === userData.password
          ) {
            dispatch(loginSuccess({ email: values.login }));
          } else {
            dispatch(authFailure("Неправильні облікові дані"));
          }
          setSubmitting(false);
          onClose();
        }}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <Box sx={styles.popupContent}>
              <Typography variant="body2" color="textSecondary">
                Для входу введіть свою email адресу та пароль
              </Typography>
              {error && (
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              )}
              <Field
                as={TextField}
                name="login"
                label="Email"
                variant="outlined"
                fullWidth
                error={touched.login && Boolean(errors.login)}
                helperText={touched.login && errors.login}
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
                Увійти
              </Button>
            </Box>
            <Box sx={styles.alternativeLogin}>
              <Typography
                variant="body2"
                align="center"
                sx={styles.registerLink}
                onClick={onShowRegister}
              >
                Реєстрація
              </Typography>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
LoginForm.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onShowRegister: PropTypes.func.isRequired,
};
export default LoginForm;
