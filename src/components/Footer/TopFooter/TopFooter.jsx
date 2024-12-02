import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PaymentIcon from "@mui/icons-material/Payment";
import ReplayIcon from "@mui/icons-material/Replay";
import { styles } from "./style";

const TopFooter = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerContent}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={styles.column}>
            <LocalShippingIcon sx={styles.icon} />
            <Box>
              <Typography variant="h6" sx={styles.title}>
                Доставка
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Самовивіз із магазину "Comfy", доставка за адресою або у
                відділення 'Нова Пошта' і "Meest"
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={styles.column}>
            <AssignmentTurnedInIcon sx={styles.icon} />
            <Box>
              <Typography variant="h6" sx={styles.title}>
                Гарантія
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Сертифікована техніка з офіційною гарантією від виробника.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={styles.column}>
            <PaymentIcon sx={styles.icon} />
            <Box>
              <Typography variant="h6" sx={styles.title}>
                Оплата
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Оплатити покупку можливо готівкою, картою чи безготівковим
                розрахунком.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={styles.column}>
            <ReplayIcon sx={styles.icon} />
            <Box>
              <Typography variant="h6" sx={styles.title}>
                Повернення
              </Typography>
              <Typography variant="body2" sx={styles.text}>
                Повернення товару відбувається протягом 14 днів після покупки, у
                відповідності із діючим законом.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TopFooter;
