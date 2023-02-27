import React, {useLayoutEffect, useRef} from 'react'
import bw from '../assets/bw.png'
import color from '../assets/color.png'
import {gsap} from 'gsap'
import {motion as m} from 'framer-motion'

const LoadingMask = () => {

    
    const imgRef = useRef(null)
    const colorImgRef= useRef(null)

    const tl= gsap.timeline({defaults: {duration:1}})
  useLayoutEffect(()=>{
    
    tl.to(imgRef.current,{clipPath:'polygon(5% 5%, 95% 5%, 95% 95%, 5% 95%)'},'+=1.5')
    tl.to(imgRef.current,{clipPath:'polygon(95% 5%, 95% 5%, 95% 95%, 95% 95%)'},'+=1.5')
    tl.from(colorImgRef.current,{clipPath:'polygon(15% 15%, 85% 15%, 85% 85%, 15% 85%)'},'+=1.3')
    tl.to(colorImgRef.current,{clipPath:'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'})

  },[])
   

  return (
    <m.div
    className='absolute top-0 left-0 right-0 bottom-0 touch-none overflow-hidden width-full h-screen z-50 bg-stone-300 '
    initial={{opacity:1}}
    exit={{
      opacity: 0
    }}
    transition={{
       duration:3
    }} 
    >
        <div className="h-screen w-full relative flex justify-center items-center clip-path-mypolygon"

        ref={imgRef}>
      
            <img src={bw} alt="black" className='object-cover h-screen w-full absolute top-0 '/>
            <h1 className='text-5xl sm:text-5xl md:text-7xl lg:text-9xl text-white z-10 tracking-wide'>are you hungry?</h1>
        </div>



        <div className="h-screen w-full absolute top-0 flex justify-center items-center z-[-1] clip-path-mypolygon" ref={colorImgRef}>
      
            <h1 className='text-5xl sm:text-5xl md:text-7xl lg:text-9xl text-yellow-500 z-10 tracking-wide'>are you hungry?</h1>
            <img src={color} alt="black" className='object-cover h-screen w-full absolute top-0 '/>
        </div>
    </m.div>
  )
}

export default LoadingMask