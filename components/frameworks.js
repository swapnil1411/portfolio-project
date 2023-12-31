import { Box, Flex, Container, Image, Heading } from "@chakra-ui/react";
import { useContext } from 'react';
import MyContext from './context';
import React, { useState } from 'react'
import { motion } from "framer-motion"; 
const languages = [
  { name: "JavaScript", iconUrl: "js.svg" },
  { name: "React", iconUrl: "react.svg" },
  { name: "Next.js", iconUrl: "nextjs.svg" },
  { name: "Bootstrap", iconUrl: "bootstrap.svg" },
  { name: "Node.js", iconUrl: "nodejs.svg" },
  { name: "MongoDB", iconUrl: "mongodb.svg" },
];

function Framework() {

  const [isDarkMode, setIsDarkMode] = useContext(MyContext);



  return (
   
    <Container
    background={isDarkMode?'#505483':'#72899B'}
    color={isDarkMode?'gray.100':'gray.800'}
    minW={'100%'}
    minH={'calc(60vh)'}
    
    rounded={6}
  >

  <Heading as="h2" fontSize="6xl" padding={4}  textAlign={'center'} >
           Skills
          </Heading>
          
      <Flex flexWrap="wrap" alignItems={'center'} justifyContent={'center'}>
     
        {languages.map((language, index) => (
          <motion.div
        
        

          >
          <Box
            key={language.name}
            m={4}
            p={4}
            borderRadius={50}
            backgroundColor="gray.300"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Image src={language.iconUrl} alt={language.name} boxSize="150px" />
            <span>{language.name}</span>
          </Box>
          </motion.div>
        ))}
      </Flex>
      </Container>
   
  );
}

export default Framework;
