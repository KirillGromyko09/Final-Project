import * as React from "react";
import CatalogDropdown from "../../UI/catalogDropdown";
import { AppBar, Box, Toolbar } from "@mui/material";
import SearchBar from "../../UI/searchBar/index.js";
import { styles } from "./styles.js";
import { useState } from "react";

const BottomHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  return (
    <AppBar
      sx={{
        ...styles.appBar,
      }}
    >
      <Toolbar>
        <Box>{<CatalogDropdown />}</Box>
      </Toolbar>
    </AppBar>
  );
};

export default BottomHeader;
