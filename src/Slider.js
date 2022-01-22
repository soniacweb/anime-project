/* eslint-disable react/style-prop-object */
import React from "react";
import { Box, Image } from "@chakra-ui/react";

const SliderPage = ({ anime }) => {
  return (
    <Box overflow="hidden" className="container-images" bg="purple" w={256}>
      <Image
        className="images"
        maxW="sm"
        maxH="sm"
        src={anime.attributes.posterImage.large}
        alt={anime.attributes.titles.en}
      />
      <Box
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        isTruncated
        color="white"
      >
        {anime.attributes.titles.en}
      </Box>
    </Box>
  );
};

export default SliderPage;
