import { useState } from "react";

const useSnackbar = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbarWithMessage = (message) => {
    setSnackbarMessage(message);
    setShowSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  return {
    showSnackbar,
    snackbarMessage,
    showSnackbarWithMessage,
    handleCloseSnackbar,
  };
};

export default useSnackbar;
