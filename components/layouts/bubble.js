import { motion } from 'framer-motion'

import React from 'react'

function Bubble() {
  return (
    <div className='absolute z-2'>
    <motion.svg
      viewBox="0 0 200 200"
      width={400}
      animate={{rotate:360}}
      transition={{
        duration: 20,
        loop: Infinity, // Infinite loop
        ease: "linear", // Linear animation for a smooth circle
      }}
    
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
     
     
        strokeWidth={4}
        strokeDasharray="0 1"
        fill="#969BBE"
        d="M61.9,-58.1C77.6,-46.2,86,-23.1,82.5,-3.5C79.1,16.2,63.8,32.4,48.1,48.1C32.4,63.9,16.2,79.2,-2.7,81.9C-21.6,84.6,-43.1,74.6,-53.2,58.9C-63.3,43.1,-61.8,21.6,-60.6,1.2C-59.4,-19.1,-58.4,-38.2,-48.3,-50.1C-38.2,-62,-19.1,-66.7,2,-68.7C23.1,-70.7,46.2,-70,61.9,-58.1Z"
        transform="translate(100 100)"
      />
    </motion.svg>
    </div>
  )
}

export default Bubble
{
  /* <motion.svg viewBox="0 0 200 200"    xmlns="http://www.w3.org/2000/svg">
      <motion.path
       animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 40,
        loop: Infinity, // Infinite loop
        ease: "linear", // Linear animation for a smooth circle
      }}
        strokeWidth={4}
        strokeDasharray="0 1"
        fill="#969BBE"
        d="M52.1,-72.5C66.7,-61.2,77.1,-44.8,83.2,-26.9C89.2,-8.9,90.9,10.6,83.8,25.6C76.7,40.6,60.7,51,45.2,59.8C29.8,68.6,14.9,75.8,-1.9,78.4C-18.7,81,-37.4,79.1,-49.5,69.2C-61.7,59.3,-67.4,41.5,-71.3,24.4C-75.2,7.2,-77.2,-9.3,-72.6,-23.6C-68,-38,-56.6,-50.2,-43.4,-61.9C-30.2,-73.7,-15.1,-85,1.8,-87.5C18.8,-90.1,37.5,-83.8,52.1,-72.5Z"
        
      />
    </motion.svg> */
}
