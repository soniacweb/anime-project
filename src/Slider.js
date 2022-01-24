/* eslint-disable react/style-prop-object */
import React from "react";
import { Box, Image, Badge } from "@chakra-ui/react";

const SliderPage = ({ anime }) => {
  return (
<>
{anime.attributes.titles.en ? 
<Box maxW='sm' overflow='hidden'>
      <Image
        className="images"
        // maxW="sm"
        // maxH="sm"
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
              <Box p='6'>
              <Box display='flex' alignItems='baseline'>
          
          <Badge borderRadius='full' px='2' colorScheme='teal'  m ={2}>
          {anime.attributes.startDate.split('-')[0]} 
          </Badge>
          
          <Badge borderRadius='full' px='2' colorScheme='linkedin' m ={2} >
          
          {anime.attributes.averageRating}
          </Badge>
          
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated

        >
         {anime.attributes.titles.en}
        </Box>
      </Box>

      </Box>
    </Box> : '' }

</>  
  );
};

export default SliderPage;
