import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const SliderPage = ({ anime, key }) => {
  return (
    <Flex flexDir="row" bg="purple" wrap="nowrap">
      <Box display="flex" bg="tomato" flexDir="row" wrap="nowrap">
        <Slide index={key}>
          {/* <Image src={anime.attributes.posterImage.large} /> */}
          <Text>{anime.attributes.titles.en}</Text>
          {/* <Text>{anime.attributes.description}</Text> */}
        </Slide>
      </Box>
    </Flex>
  );
};

export default SliderPage;
