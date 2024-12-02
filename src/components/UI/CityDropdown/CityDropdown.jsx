import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { styles } from "./styles.js";

const cities = ["Одеса", "Київ", "Харків", "Львів", "Миколаів"];
const CityDropdown = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <FormControl sx={styles.formControl}>
      <InputLabel sx={styles.inputLabel} id="city-select-label">
        {"Місто"}
      </InputLabel>
      <Select
        labelId="city-select-label"
        id="city-select"
        value={selectedCity}
        label="Місто"
        onChange={handleChange}
        MenuProps={{
          disableScrollLock: true,
        }}
        sx={styles.select}
      >
        {cities.map((city, index) => (
          <MenuItem key={index} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CityDropdown;
