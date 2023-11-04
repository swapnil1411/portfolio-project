import { Container} from '@chakra-ui/react'
import Navbar from '../components/navbar'
import Profile from '../components/profile'
import { useState, useEffect } from 'react'
import Framework from '../components/frameworks'
import ProjectContainer from '../components/projects'
import MyContext from '../components/context'



const Page = () => {
  const [domLoaded, setDomLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  return (
    <>
      {domLoaded && (
        <Container maxW="90%" >
       
        <MyContext.Provider value={[ isDarkMode, setIsDarkMode ]}>
          <Navbar />
          <Profile />
          <Framework/>
          <ProjectContainer/>
          </MyContext.Provider>
        </Container>
      )}
    </>
  )
}

export default Page
