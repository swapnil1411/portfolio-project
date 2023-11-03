

import { Text, useColorModeValue } from '@chakra-ui/react'
import { useEffect } from 'react';


const Logo = props => {
  
  let isDarkMode = props.isDarkMode;
 useEffect(() => {
console.log(isDarkMode);
 },[isDarkMode])

  return (
    <>
   
      <Text
        color={!isDarkMode? 'gray.900' : 'whiteAlpha.900'}
        fontFamily="M PLUS Rounded 1c"
        fontWeight="bold"
        ml={3}
      >
        Swapnil Nanavati
      </Text>
    </>
  )
}

export default Logo
