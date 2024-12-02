import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import {
  AccessTime as AccessTimeIcon,
  Info as InfoIcon,
  LocalShipping,
  CheckCircle as CheckCircleIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearOrderData } from "../../../store/slices/orderSlice";
import { styles } from "./styles";

const CheckoutConfirmation = ({ city, deliveryMethod, contactInfo }) => {
  const [orderTotal, setOrderTotal] = useState("0");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const storedOrderTotal = localStorage.getItem("orderTotal");
    if (storedOrderTotal) {
      setOrderTotal(JSON.parse(storedOrderTotal));
    }
  }, []);

  useEffect(() => {
    return () => {
      dispatch(clearOrderData());
    };
  }, [navigate, dispatch]);

  return (
    <Box sx={styles.summaryContainer}>
      <CheckCircleIcon sx={styles.bigIcon} />
      <Typography variant="h6" sx={styles.title}>
        Дякуємо за замовлення!
      </Typography>
      <Typography variant="h6" sx={styles.infoSum}>
        Сума Вашого замовлення: <strong>{orderTotal} грн.</strong>
      </Typography>
      <Box sx={styles.summary}>
        <Box sx={styles.infoSection}>
          <Box sx={styles.section}>
            <AccessTimeIcon sx={styles.icon} />
            <Typography variant="body1" sx={styles.text}>
              Ваше замовлення буде оброблене автоматично, в разі необхідності з
              Вами зв&#39;яжеться оператор.
            </Typography>
          </Box>
          <Box sx={styles.section}>
            <LocalShipping sx={styles.icon} />
            <Typography variant="body2" sx={styles.infoText}>
              <strong> Спосіб доставки: </strong> <br />
              {city},{" "}
              {deliveryMethod
                ? `${deliveryMethod.name} (${deliveryMethod.price === 0 ? "Безкоштовно" : `${deliveryMethod.price} грн.`})`
                : "не вибрано"}{" "}
              <br />
            </Typography>
          </Box>
          <Box sx={styles.sectionInfo}>
            <InfoIcon sx={styles.icon} />
            <Box sx={styles.infoBox}>
              <Typography variant="body2" sx={styles.infoText}>
                <strong> Контактні дані: </strong> <br />
                Тел.: {contactInfo.phoneNumber || "Не вказано"} <br />
                Ім&#39;я: {contactInfo.firstName || "Не вказано"} <br />
                Email: {contactInfo.email || "Не вказано"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

CheckoutConfirmation.propTypes = {
  city: PropTypes.string.isRequired,
  deliveryMethod: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }),
  contactInfo: PropTypes.shape({
    phoneNumber: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default CheckoutConfirmation;
