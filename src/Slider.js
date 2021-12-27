import React from 'react'
import { Box, Text, Button } from '@chakra-ui/react'
const Slider = ({anime}) => {

  

    return (
        <Box>
            <Text>{anime.name}</Text>
            <Text>{anime.description}</Text>
            <Button colorScheme='blue'>Button</Button>
        </Box>
    )
}

export default Slider
