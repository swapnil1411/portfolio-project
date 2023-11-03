import { Box, Container, Flex, Spacer, Switch, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <Box bg={isDarkMode ? 'gray.800' : 'gray.100'} py="2" px="4" rounded={6}>
      <Container>
        <Flex alignItems="center">
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color={!isDarkMode ? 'gray.900' : 'whiteAlpha.900'}
            fontFamily="M PLUS Rounded 1c"
            ml={3}
          >
            Swapnil Nanavati
          </Text>
          <Spacer />
          <Box display={['none', 'block']}>
            <Flex alignItems="center">
              <Text
                mx="4"
                fontSize="lg"
                textColor={isDarkMode ? 'gray.100' : 'gray.800'}
              >
                Home
              </Text>
              <Text
                mx="4"
                fontSize="lg"
              
                textColor={isDarkMode ? 'gray.100' : 'gray.800'}
              >
                About Us
              </Text>
              <Text
                mx="4"
                fontSize="lg"
                textColor={isDarkMode ? 'gray.100' : 'gray.800'}
              >
                Projects
              </Text>
            </Flex>
          </Box>
          <Spacer />
          <Switch
            colorScheme="teal"
            size="lg"
            isChecked={isDarkMode}
            onChange={toggleDarkMode}
          />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
