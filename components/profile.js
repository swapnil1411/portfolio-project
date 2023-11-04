import { Box, Button, Container, Flex, Heading, Image } from '@chakra-ui/react'
import { useContext } from 'react';
import MyContext from './context';
import React, { useState } from 'react'
const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useContext(MyContext);

  return (
    <Container
    background={isDarkMode?'#505483':'#72899B'}
    color={isDarkMode?'gray.100':'gray.800'}
      minW={'100%'}
      minH={'calc(85vh)'}
      my={4}
      rounded={6}
    >
      <Flex  flexDirection={'row'} alignItems={'center'}>
        <Box flexBasis={'100%'} >
          <Heading as="h1" fontSize="9xl" >
            Web
            <br /> Developer
          </Heading>
          <Heading as="h2" fontSize="xl" >
            ------ Hi, I'm Swapnil Nanavati
          </Heading>
          <Heading as="h2" fontSize="md" >
            a web developer based in India
          </Heading>

          <Button mt={4} borderRadius={10} colorScheme="blue">
            Talk to me
          </Button>
        </Box>

         <Box>
      <Image src="profile.jpg" 
      boxSize={'70%'}
      alt='Swapnil Nanavati'  />
        </Box> 
      </Flex>
    </Container>
  )
}

export default Profile
