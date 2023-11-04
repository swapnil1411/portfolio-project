import { Box, Button, Container, Flex, Heading,Image } from "@chakra-ui/react"

 const Profile = () =>{
    return (
        <Container  maxW={'30vw'}  m={0}>
            <Flex alignItems="center" justifyContent='center'  >
      <Box>
      <Flex direction="column" alignItems="center" justifyContent='center'>
        <Heading as="h1" fontSize="8xl" textAlign="center">
          Web 
         <br /> Developer
        </Heading>
        <Heading as="h2" fontSize="xl" alignSelf={'flex-start'}>
         ------ Hi, I'm Swapnil Nanavati
        </Heading>
        <Heading as="h2" fontSize="md" textAlign="center">
        a web developer based in India
        </Heading>
       
        <Button mt={4} borderRadius={10} colorScheme="blue">
          Talk to me
        </Button>
        
      </Flex>
        
        </Box>

      {/* <Box>
      <Image src="profile.jpg" alt='Swapnil Nanavati' />
        </Box> */}
</Flex>
        </Container>
    )
}

export default Profile