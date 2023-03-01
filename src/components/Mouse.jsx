import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Mouse = () => {
    const [mousePosition, setMouesPosition] = useState({
        x:0,
        y:0
    })

    const [cursorVariant, setCursorVariant] =useState("default")

 

    useEffect(()=>{
        const mouseMove = e =>{
            setMouesPosition({
                x: e.clientX,
                y: e.clientY
            }) 
        }

        window.addEventListener("mousemove",mouseMove)

        return () =>{
            window.removeEventListener("mousemove", mouseMove)
        }
    },[])

    const variants = {
        default: {
            x: mousePosition.x -56,
            y: mousePosition.y -56
        },
        text:{
            x: mousePosition.x -75,
            y: mousePosition.y -75,
            height: 150,
            width: 150,
            backgroundColor: "#facc15",
            mixBlendMode:"difference",
            scale:2
        }
    }


  
  return ( 
        <motion.div
        variants={variants}
        animate={cursorVariant}
        className=' border-4 border-rose-600 h-8 w-8 rounded-full sm:fixed top-0 left-0 pointer-events-none sm:z-[99] '/>
  )
}

export default Mouse