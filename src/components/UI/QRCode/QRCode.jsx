import React from "react";
import qrCode from "./../../../assets/svg/qrCode.svg";
import { Box, IconButton, Typography } from "@mui/material";
import { styles } from "./style.js";

const QRCode = () => {
  return (
    <Box sx={styles.qrContainer}>
      <IconButton>
        <img src={qrCode} alt="QRCode" />
      </IconButton>
      <Typography variant="body1" sx={styles.qrText}>
        Псс. Знаєш, що це? 👀
      </Typography>
    </Box>
  );
};

export default QRCode;
