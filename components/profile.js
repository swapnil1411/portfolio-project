import { Box, Button, Container, Flex, Heading, Image } from '@chakra-ui/react'
import { useContext } from 'react'
import MyContext from './context'
import React, { useState } from 'react'
import Bubble from './layouts/bubble'
const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useContext(MyContext)

  return (
    <Container
      background={isDarkMode ? '#505483' : '#72899B'}
      color={isDarkMode ? 'gray.100' : 'gray.800'}
      minW={'100%'}
      minH={'calc(45vh)'}
      my={4}
      rounded={6}
     
    >
   
      <Flex  flexDirection={'row'} alignItems={'center'}>
    
        <Box flexBasis={'100%'}  position={'relative'}>
        <Bubble  />
          <Heading  className='z-10' as="h1" fontSize="9xl" position={'relative'}>
            Web
            Developer
          </Heading>
          <Heading as="h2" fontSize="5xl" mb={3} position={'relative'}>
          Hi, I'm Swapnil Nanavati
          </Heading>
          <Heading as="h2" fontSize="5xl" position={'relative'}>
            a web developer based in India
          </Heading>

          <Button mt={4} borderRadius={10} size={'lg'} p={4} colorScheme="blue">
            Talk to me
          </Button>
        </Box>

        <Box  position={'relative'}>
          <Image src="profile.jpg" boxSize={'70%'} alt="Swapnil Nanavati" />
        </Box>
      </Flex>
    </Container>
  )
}

export default Profile
