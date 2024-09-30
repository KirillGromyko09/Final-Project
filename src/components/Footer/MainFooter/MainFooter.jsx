import React from "react";
import { Typography, Link, Box, Grid } from "@mui/material";
import { styles } from "./style.js";
import QRCode from "../../UI/QRCode";
import EmailForm from "../../UI/EmailForm/index.js";
import storageService from "../../../utils/storage/StorageService.js";

const MainFooter = () => {
  const handleSubscriptionSubmit = (values) => {
    storageService.saveUserEmail(values);
  };

  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerContent}>
        <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
          <Grid item>
            <QRCode />
          </Grid>
          <Grid item>
            <EmailForm onSubmit={handleSubscriptionSubmit} />
          </Grid>
          <Grid item xs={12} sm={6} md={2.4} sx={{ paddingLeft: 0 }}>
            <Typography variant="h6" sx={styles.title}>
              Про компанію
            </Typography>
            <Typography variant="body2" sx={styles.text}>
              COMFY — найбільший продавець побутової техніки та електроніки в
              Україні. Компанія вже понад 10 років працює в омніканальній
              бізнес-моделі і є гравцем #2 в українському e-commerce. Станом на
              1 квітня 2024 року мережа COMFY налічує 102 магазини.
            </Typography>
          </Grid>
          <Grid item xs="auto" sx={{ p: 0 }}>
            <Typography variant="h6" sx={styles.title}>
              Допомога покупцеві
            </Typography>
            <Link href="/" sx={styles.link}>
              <Typography variant="body2">Центр допомоги клієнтам</Typography>
            </Link>
            <Link href="/" sx={styles.link}>
              <Typography variant="body2">Знайти замовлення</Typography>
            </Link>
            <Link href="/" sx={styles.link}>
              <Typography variant="body2">Умови доставки</Typography>
            </Link>
            <Link href="/" sx={styles.link}>
              <Typography variant="body2">Обмін і повернення товару</Typography>
            </Link>
            <Link href="/" sx={styles.link}>
              <Typography variant="body2">Гарантія</Typography>
            </Link>
            <Link href="/" sx={styles.link}>
              <Typography variant="body2">
                Правила користування сайтом
              </Typography>
            </Link>
            <Link href="/" sx={styles.link}>
              <Typography variant="body2">Правила участі в акціях</Typography>
            </Link>
          </Grid>
          <Grid item xs="auto" sx={{ p: 0 }}>
            <Typography variant="h6" sx={styles.title}>
              Консультація
            </Typography>
            <Typography variant="body2" sx={styles.phone}>
              0-800-303-505
            </Typography>
            <Typography variant="body2" sx={styles.phone}>
              0-800-600-506
            </Typography>
            <Typography variant="body2" sx={styles.text}>
              Безкоштовно по Україні
            </Typography>
            <Typography variant="body2" sx={styles.text}>
              08:00-21:00 Пн-Нд
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MainFooter;
