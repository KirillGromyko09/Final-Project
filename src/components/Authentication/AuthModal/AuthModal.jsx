import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Modal } from "@mui/material";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

const AuthModal = ({ open, onClose }) => {
  const [showRegister, setShowRegister] = useState(false);

  const handleShowRegister = () => {
    setShowRegister(true);
  };

  const handleShowLogin = () => {
    setShowRegister(false);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        {showRegister ? (
          <RegisterForm
            open={open}
            onClose={onClose}
            onShowLogin={handleShowLogin}
          />
        ) : (
          <LoginForm
            open={open}
            onClose={onClose}
            onShowRegister={handleShowRegister}
          />
        )}
      </Box>
    </Modal>
  );
};

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;
