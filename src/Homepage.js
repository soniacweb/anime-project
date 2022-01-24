import React from "react";
import SliderPage from "./Slider";
import { Box, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselCard = ({ title, animeList }) => {
  return (
    <Box bg="black">
      <Text fontSize="5xl" color="white">
        <h1>{title}</h1>
      </Text>
      <Carousel responsive={responsive}>
        {animeList.map((anime, indx) => {
          return <SliderPage anime={anime} key={indx} />;
        })}
      </Carousel>
    </Box>
  );
};

export default CarouselCard;
