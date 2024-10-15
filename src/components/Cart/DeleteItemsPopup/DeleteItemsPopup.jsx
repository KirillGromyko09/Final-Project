import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Typography, IconButton, Button } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { styles } from "./styles";

const DeleteAllItemsPopup = ({ onClose, onDelete }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Box sx={styles.popupContainer} ref={popupRef}>
      <Box sx={styles.popupHeader}>
        <Typography variant="h6">Видалити всі товари із кошику?</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box sx={styles.popupContent}>
        <Typography variant="body1">
          Відмінити цю дію буде не можливо.
        </Typography>
      </Box>
      <Box sx={styles.popupActions}>
        <Button sx={styles.continueButton} variant="outlined" onClick={onClose}>
          Залишити
        </Button>
        <Button sx={styles.deleteButton} variant="contained" onClick={onDelete}>
          Видалити
        </Button>
      </Box>
    </Box>
  );
};

DeleteAllItemsPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteAllItemsPopup;
