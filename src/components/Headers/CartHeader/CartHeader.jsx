import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link,
  Divider,
} from "@mui/material";
import CityDropdown from "../../UI/CityDropdown";
import logo from "../../../assets/svg/logo-main-comfy.svg";
import { styles } from "./styles";
import { useNavigate } from "react-router-dom";

const CartHeader = ({ languages }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  const cities = ["Київ", "Львів", "Одеса", "Харків"];

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <AppBar sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.logoBox} onClick={handleLogoClick}>
          <img src={logo} alt="COMFY Logo" style={styles.logo} />
          <Typography sx={styles.cityTypography}>
            <CityDropdown
              cities={cities}
              selectedCity={selectedCity}
              handleChange={handleCityChange}
            />
          </Typography>
        </Box>
        <Box sx={styles.textPhone}>
          <Typography variant="body1" sx={styles.text}>
            Безкоштовно по Україні:
            <Link href="tel:0800303505" sx={styles.phone}>
              0-800-303-505
            </Link>
          </Typography>
          <Divider orientation="vertical" flexItem sx={styles.divider} />
          <Typography variant="body1" sx={styles.text}>
            Безкоштовно по Києву:
            <Link href="tel:0443939505" sx={styles.phone}>
              044-39-39-505
            </Link>
          </Typography>
        </Box>
        <Box sx={styles.buttonBox}>
          {languages.map((lang, index) => (
            <React.Fragment key={lang}>
              {index === 0 ? (
                <Button sx={styles.languageButton}>{lang}</Button>
              ) : (
                <Typography sx={styles.languageText}>{lang}</Typography>
              )}
            </React.Fragment>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

CartHeader.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CartHeader;
