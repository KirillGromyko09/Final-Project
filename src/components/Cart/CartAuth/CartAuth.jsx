import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { styles } from "./styles";
import AuthModal from "../../../components/Authentication/AuthModal";

const CartAuth = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);

  const handleAuthModalOpen = () => {
    setOpenAuthModal(true);
  };

  const handleAuthModalClose = () => {
    setOpenAuthModal(false);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.textBox}>
        <Typography variant="h4" gutterBottom sx={styles.text}>
          Авторизуйтеся або створіть обліковий запис для завершення замовлення
        </Typography>
        <Button
          aria-controls="categories-menu"
          aria-haspopup="true"
          onClick={handleAuthModalOpen}
          sx={styles.iconButtonAuth}
        >
          Увійти
        </Button>
      </Box>
      <AuthModal open={openAuthModal} onClose={handleAuthModalClose} />
    </Box>
  );
};

export default CartAuth;
