import { useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { styles } from "./style";

const EmailForm = ({ onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Невірна e-mail адреса")
      .required("Поле обов'язкове до заповнення"),
  });

  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        onSubmit(values);
        setSubmitting(false);
        resetForm();
        setSubmitted(true);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Box sx={styles.formContainer}>
            <Typography sx={styles.formTitle}>
              Підпишіться на знижки!
            </Typography>
            <Typography sx={styles.formSubtitle}>
              Не турбуйтесь, ми не спамимо{" "}
              <span role="img" aria-label="smile">
                😍
              </span>
            </Typography>
            <Field name="email">
              {({ field, form: { touched, errors } }) => (
                <TextField
                  {...field}
                  type="email"
                  label="E-mail"
                  fullWidth
                  margin="normal"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
              )}
            </Field>
            <Button
              type="submit"
              sx={styles.formButton}
              disabled={isSubmitting}
            >
              Відправити
            </Button>
            {submitted && (
              <Typography sx={styles.successMessage}>
                Ви успішно підписалися на наші новини!
              </Typography>
            )}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

EmailForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EmailForm;
