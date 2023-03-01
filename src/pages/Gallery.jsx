import React from 'react'
import {motion as m} from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic4 from '../assets/pic4.png'
import pic5 from '../assets/pic5.png'
import pic6 from '../assets/pic6.png'
import pic7 from '../assets/pic7.png'
import pic9 from '../assets/pic9.png'
import pic10 from '../assets/pic10.png'

const Gallery = () => {
  return (
    <m.div 
    initial={{y:'100%'}}
    animate={{y:0,
    transition:{
      duration:1
    }}}
    exit={{y:'-100%',
      transition:{
        duration:1
      }}} 
    className='min-h-screen h-fit w-full absolute top-0 left-0 right-0 bottom-0 overflow-hidden bg-stone-200'>
      <Navbar/>
      <div className='max-w-screen-2xl mx-auto py-10'>

        <div className='flex flex-col md:grid grid-col-4 grid-rows-4 grid-flow-col gap-2 px-10 py-40'>
              <div className='row-span-2 w-full hover:scale-105 duration-300 cursor-pointer'>
                <img src={pic9} alt="" className='object-cover object-center rounded inset-0 h-full w-full' />
              </div>
              <div className='col-span-2 row-span-2 w-full hover:scale-105 duration-300 cursor-pointer'>
                <img src={pic1} alt="" className='object-cover object-center rounded inset-0 h-full w-full' />
              </div>
              <div className='w-full hover:scale-105 duration-300 cursor-pointer'>
                <img src={pic2} alt="" className='object-cover object-center rounded inset-0 h-full w-full hover:scale-105 duration-300 cursor-pointer' />
              </div>
              <div className='w-full hover:scale-105 duration-300 cursor-pointer'>
                <img src={pic6} alt="" className='object-cover object-center rounded inset-0 h-full w-full hover:scale-105 duration-300 cursor-pointer' />
              </div>
              <div className='w-full col-span-2 row-span-2'>
                <img src={pic7} alt="" className='object-cover object-center rounded inset-0 h-full w-full hover:scale-105 duration-300 cursor-pointer' />
              </div>
              <div className='w-full col-span-2'>
                <img src={pic4} alt="" className='object-cover object-center rounded inset-0 h-full w-full hover:scale-105 duration-300 cursor-pointer' />
              </div>
              <div className='w-full hover:scale-105 duration-300 cursor-pointer'>
                <img src={pic5} alt="" className='object-cover object-center rounded inset-0 h-full w-full hover:scale-105 duration-300 cursor-pointer' />
              </div>
              <div className='w-full hover:scale-105 duration-300 cursor-pointer'>
                <img src={pic10} alt="" className='object-cover object-center rounded inset-0 h-full w-full' />
              </div>
        </div>

      </div>
      <Footer/>
    </m.div>
  )
}

export default Gallery