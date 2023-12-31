import { SimpleGrid, Container, Heading } from '@chakra-ui/react'
import ProjectCard from './layouts/projectCard'
import { useContext } from 'react'
import { motion } from "framer-motion"; 
import MyContext from './context'
import React from 'react'

const projects = [
  {
    name: 'Employee Management System',
    url: 'https://github.com/swapnil1411/Employee-Management-System',
    src: 'ems.png'
  },
  {
    name: 'Driving Test',
    url: 'https://github.com/swapnil1411/DrivingTest',
    src: 'driving-test.png'
  }
]

const ProjectContainer = () => {
  const [isDarkMode, setIsDarkMode] = useContext(MyContext)

  return (
    <Container
      background={isDarkMode ? '#505483' : '#72899B'}
      color={isDarkMode ? 'gray.100' : 'gray.800'}
      minW={'100%'}
      minH={'calc(85vh)'}
      my={4}
      rounded={6}
    >
      <Heading as="h2" fontSize="6xl" textAlign={'center'}>
        Projects
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2 }} spacing={4} my={8}>
        {projects.map((project, index) => (
         <motion.div
       
         whileTap={{ scale: 0.8 }}
         
       >
            <ProjectCard key={index} {...project} isDarkMode />
            </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default ProjectContainer
