import * as React from "react";
import CatalogDropdown from "../../UI/catalogDropdown";
import { AppBar, Box, Toolbar } from "@mui/material";
import SearchBar from "../../UI/searchBar/index.js";

const BottomHeader = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box>
          <CatalogDropdown />
        </Box>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default BottomHeader;
