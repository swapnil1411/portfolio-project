import { Box, Container, Heading } from "@chakra-ui/react"
import Navbar from "../components/navbar"
import Profile from "../components/profile"
import { useState,useEffect} from "react"



const Page = () =>{
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
      }, []);

    return (
        <>
{domLoaded && (
        <Container maxW="container.xl">
       <Navbar/>
<Profile/>
       </Container>
       )}
       </>  
    )
}

export default Page