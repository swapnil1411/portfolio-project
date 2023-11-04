import {
  Box,
  Link,
  Text,
  VStack,
  HStack,
  Image,
  Flex,
  Container
} from '@chakra-ui/react'

import { useContext, useEffect } from 'react';

import React, { useState } from 'react'
import MyContext from '../context';

const ProjectCard = ({ name, url, src }) => {

    const [isDarkMode, setIsDarkMode] = useContext(MyContext);
    

    return (
  <Box borderWidth="1px" borderRadius="lg" p={4} overflow="hidden" color={isDarkMode?'':'gray.200'}>
    <Flex flexDirection={'column'} >
      <Container flex={1} maxH={'calc(30vh)'}>
        <Image src={src} alt={src} borderRadius={7}></Image>
      </Container>

      <VStack spacing={2}>
        <Text fontSize="lg" fontWeight="bold">
          {name}
        </Text>
        <HStack>
          <Link href={url} target="_blank" color="blue.500">
            GitHub
          </Link>
        </HStack>
      </VStack>
    </Flex>
  </Box>
  )
}

export default ProjectCard
