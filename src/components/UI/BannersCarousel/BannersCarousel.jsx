import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannersCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change this value to control the speed of the autoplay
    arrows: true, // Change to false if you don't want navigation arrows
  };

  const items = [
    {
      id: 1,
      imageUrl: "./../../../assets/jpg/AirPods.jpg",
      title: "iPhone 13",
      description: "Experience the latest iPhone 13.",
    },
    {
      id: 2,
      imageUrl: "AppleWatch",
      title: "iPhone 13 Pro",
      description: "Discover the iPhone 13 Pro.",
    },
    {
      id: 3,
      imageUrl: "Iphone16",
      title: "iPhone 13 Mini",
      description: "Compact yet powerful iPhone 13 Mini.",
    },
  ];

  return (
    <Box sx={{ width: "100%", padding: 2, overflow: "hidden" }}>
      <Slider {...settings}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              padding: 2,
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
            }}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <Typography variant="h5" sx={{ mt: 2 }}>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              {item.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default BannersCarousel;
