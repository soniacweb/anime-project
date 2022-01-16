import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderPage from "./Slider";
import {
  CarouselProvider,
  ButtonBack,
  ButtonNext,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Flex } from "@chakra-ui/react";
const Homepage = () => {
  // const [anime, setAnime] = useState([]);
  const [trendyAnime, setTrendyAnime] = useState([]);
  useEffect(() => {
    const trendyAnimeUrl = `https://kitsu.io/api/edge/trending/anime`;
    // const animeUrl = `https://kitsu.io/api/edge/anime`;
    const promise1 = axios.get(trendyAnimeUrl);
    // const promise2 = axios.get(animeUrl);
    Promise.all([promise1])
      .then((res) => {
        setTrendyAnime(res[0].data.data);
        // setAnime(res[1].data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Flex flexDir="row" bg="grey">
      <Box>
        <CarouselProvider
          orientation="horizontal"
          isIntrinsicHeight
          visibleSlides={2}
          totalSlides={1}
          step={2}
        >
          {trendyAnime.map((anime, index) => {
            console.log(anime);
            console.log(index);
            return (
              <Slider bg="grey">
                <SliderPage anime={anime} key={index} />
              </Slider>
            );
          })}
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </Box>
    </Flex>
  );
};

export default Homepage;
