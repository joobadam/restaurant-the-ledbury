import React from 'react'
import {motion as m} from 'framer-motion'

const Food = () => {
  return (
    <m.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className='h-screen w-full '>Food</m.div>
  )
}

export default Food