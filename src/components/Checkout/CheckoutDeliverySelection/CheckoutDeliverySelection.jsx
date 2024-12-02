import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CheckoutContinueButton from "../../UI/Buttons/CheckoutContinueButton";
import CheckoutCollapsedButton from "../../UI/Buttons/CheckoutCollapsedButton";
import { setCity, setDeliveryMethod } from "../../../store/slices/orderSlice";
import { styles } from "./styles";
import { useGetCitiesQuery } from "../../../store/slices/novaPoshtaApi.js";

const CheckoutDeliverySelection = ({ deliveryMethods }) => {
  const dispatch = useDispatch();
  const { city, deliveryMethod } = useSelector((state) => state.order);
  const [selectedMethod, setSelectedMethod] = useState(deliveryMethod || null);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { data: cities = [], error, isLoading } = useGetCitiesQuery();

  useEffect(() => {
    const storedCity = localStorage.getItem("city");
    const storedDeliveryMethod = localStorage.getItem("deliveryMethod");

    if (storedCity) {
      dispatch(setCity(storedCity));
    }

    if (storedDeliveryMethod) {
      const parsedDeliveryMethod = JSON.parse(storedDeliveryMethod);
      dispatch(setDeliveryMethod(parsedDeliveryMethod));
    }
  }, [dispatch]);

  useEffect(() => {
    setSelectedMethod(deliveryMethod);
  }, [deliveryMethod]);

  const handleMethodChange = (event) => {
    const method = deliveryMethods.find(
      (method) => method.id === event.target.value,
    );
    setSelectedMethod(method);
    dispatch(setDeliveryMethod(method));
    console.log("Выбранный метод доставки:", method);
  };

  const handleCityChange = (event) => {
    const selectedCity = cities.find(
      (cityData) => cityData.Description === event.target.value,
    );
    if (selectedCity) {
      dispatch(setCity(selectedCity.Description));
      console.log("Выбранный город:", selectedCity.Description);
    }
  };

  const handleChangeClick = () => {
    setIsCollapsed(false);
  };

  const handleProceedClick = () => {
    if (selectedMethod) {
      localStorage.setItem("deliveryMethod", JSON.stringify(selectedMethod));
    }
    localStorage.setItem("city", city);
    setIsCollapsed(true);
  };

  useEffect(() => {
    console.log("Полученные города:", cities);
    if (error) {
      console.error("Ошибка при загрузке городов:", error);
    }
  }, [cities, error]);

  const cityValue = cities.find((cityData) => cityData.Description === city)
    ? city
    : "";

  if (isCollapsed) {
    return (
      <Box sx={styles.collapsedContainer}>
        <Typography variant="h6" sx={styles.collapsedHeaderText}>
          2. Спосіб доставки
        </Typography>
        <Box sx={styles.infoButton}>
          <Box>
            <Typography variant="body2" sx={styles.selectedInfo}>
              {city ? `Місто: ${city}` : "Місто: -"}
            </Typography>
            {deliveryMethod ? (
              <Typography variant="body2" sx={styles.selectedInfo}>
                {`Спосіб доставки: ${deliveryMethod.name} (${deliveryMethod.price === 0 ? "Безкоштовно" : `${deliveryMethod.price} ₴`})`}
              </Typography>
            ) : (
              <Typography variant="body2" sx={styles.selectedInfo}>
                Спосіб доставки: -
              </Typography>
            )}
          </Box>
          <CheckoutCollapsedButton onClick={handleChangeClick} />
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.title}>
        Спосіб доставки
      </Typography>
      <FormControl sx={styles.citySelect}>
        <Select
          value={cityValue}
          onChange={handleCityChange}
          displayEmpty
          inputProps={{ "aria-label": "Ваше місто" }}
          variant="outlined"
        >
          <MenuItem value="" disabled>
            Ваше місто
          </MenuItem>
          {isLoading && <MenuItem disabled>Загрузка...</MenuItem>}
          {error && <MenuItem disabled>Ошибка загрузки городов</MenuItem>}
          {cities.map((cityData) => (
            <MenuItem key={cityData.Ref} value={cityData.Description}>
              {cityData.Description}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <RadioGroup
        value={selectedMethod?.id || ""}
        onChange={handleMethodChange}
        sx={styles.radioGroup}
      >
        {deliveryMethods.map((method) => (
          <Box key={method.id} sx={styles.methodBox}>
            <FormControlLabel
              value={method.id}
              control={<Radio sx={styles.radio} />}
              label={
                <Box sx={styles.infoBox}>
                  <Box>
                    <Box sx={styles.labelBox}>
                      <Typography sx={styles.methodName}>
                        {method.name}
                      </Typography>
                      <img
                        src={method.image}
                        alt={method.name}
                        style={{
                          marginRight: "10px",
                          width: "24px",
                          height: "24px",
                        }}
                      />
                    </Box>
                    <Box>
                      {method.subLabel && (
                        <Typography sx={styles.methodSubLabel}>
                          {method.subLabel}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                  <Box>
                    <Typography sx={styles.methodPrice}>
                      {method.price === 0 ? "Безкоштовно" : `${method.price} ₴`}
                    </Typography>
                  </Box>
                </Box>
              }
            />
            {method.id === selectedMethod?.id && method.additionalInfo && (
              <Button sx={styles.selectStoreButton}>Вибрати магазин</Button>
            )}
          </Box>
        ))}
      </RadioGroup>
      <Box sx={styles.buttonBox}>
        <CheckoutContinueButton onClick={handleProceedClick} />
      </Box>
    </Box>
  );
};

CheckoutDeliverySelection.propTypes = {
  deliveryMethods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      additionalInfo: PropTypes.bool,
    }),
  ).isRequired,
};

export default CheckoutDeliverySelection;
