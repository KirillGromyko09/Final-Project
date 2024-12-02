import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppleWatch from "../../../assets/jpg/AppleWatch.jpg";
import Iphone16 from "../../../assets/jpg/Iphone16.jpg";
import Iphone16Pro from "../../../assets/jpg/iPhone16Pro.jpg";
import { styles } from "./styles.js";

const BannersCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const items = [
    {
      id: 1,
      imageUrl: Iphone16Pro,
      title: "iPhone 16 Pro",
      description: "Experience the latest iPhone 16 Pro",
    },
    {
      id: 2,
      imageUrl: Iphone16,
      title: "iPhone 16",
      description: "Discover the iPhone 16",
    },
    {
      id: 3,
      imageUrl: AppleWatch,
      title: "Apple Watch Ultra",
      description: "Compact yet powerful Apple Watch Ultra",
    },
  ];

  return (
    <Box style={styles.boxContainer}>
      <Slider {...settings}>
        {items.map((item) => (
          <Box key={item.id} style={styles.box}>
            <img src={item.imageUrl} alt={item.title} style={styles.img} />
            <Box style={styles.typographyBox}>
              <Typography variant="h5" style={styles.typography}>
                {item.title}
              </Typography>
              <Typography variant="body1" style={styles.typography}>
                {item.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BannersCarousel;
