import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import logo from "../../../assets/svg/logo-main-comfy.svg";
import { Phone } from "@mui/icons-material";
import CityDropdown from "../../UI/CityDropdown";
import { styles } from "./styles.js";

const MainHeader = () => {
  return (
    <Container maxWidth="xl">
      <AppBar sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.logoBox}>
            <Link to="/">
              <img src={logo} alt="Comfy" style={styles.logo} />
            </Link>
          </Box>
          <Box>
            <CityDropdown sx={styles.cityDropdown} />
          </Box>
          <Box sx={styles.buttonBox}>
            <Button sx={styles.buttonAccent} variant="contained">
              Акції
            </Button>
            <Button sx={styles.button}>Подарункові карти</Button>
            <Button sx={styles.button}>Магазини</Button>
            <Button sx={styles.button}>Ще</Button>
            <Button sx={styles.buttonHelp}>
              <Phone />
              Допомога
            </Button>
            <Button sx={styles.buttonLangAccent}>Укр</Button>
            <Button sx={styles.buttonLang}>Рус</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default MainHeader;
