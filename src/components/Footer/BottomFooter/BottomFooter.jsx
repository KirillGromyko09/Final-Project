import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CallIcon from "@mui/icons-material/Call";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styles } from "./style";
import visa from "./../../../assets/svg/visa.svg";
import mastercard from "./../../../assets/svg/mastercard.svg";

const BottomFooter = () => {
  return (
    <Box sx={styles.footerContainer}>
      <Box sx={styles.footerContent}>
        <Box sx={styles.textPayment}>
          <Typography variant="body2">
            © Всі права захищені ТОВ «КОМФІ ТРЕЙД», 2010–2024
          </Typography>
          <Box sx={styles.paymentMethods}>
            <img src={visa} alt="Visa" style={styles.paymentIcon} />
            <img src={mastercard} alt="MasterCard" style={styles.paymentIcon} />
          </Box>
        </Box>
        <Box sx={styles.socialNetworks}>
          <FacebookIcon sx={styles.socialNetworksIcon} />
          <YouTubeIcon sx={styles.socialNetworksIcon} />
          <InstagramIcon sx={styles.socialNetworksIcon} />
          <TwitterIcon sx={styles.socialNetworksIcon} />
          <CallIcon sx={styles.socialNetworksIcon} />
        </Box>
      </Box>
    </Box>
  );
};

export default BottomFooter;
