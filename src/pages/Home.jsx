import React, {useRef,useEffect} from 'react'
import {motion as m} from 'framer-motion'
import color2 from '../assets/color2.png'
import gsap from 'gsap';
import Menu from '../components/Menu';
import ToBar from '../components/ToBar'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {


  const titleRef= useRef(null)
  const aboutRef= useRef(null)
  const pRef= useRef(null)
  const hRef= useRef(null)
  const whyRef= useRef(null)
  const pRef2= useRef(null)
  const menuRef= useRef(null)
  
  const tl = gsap.timeline()
  
  
useEffect(()=>{
  tl.from(titleRef.current,{duration:1.5,delay:1.5, x:'100%', ease:'elastic'})
  tl.from([aboutRef.current,pRef.current,hRef.current,whyRef.current,pRef2.current, menuRef.current],{
    duration:1,
    ease:"power3.out",
    y:"100%",
    stagger:{
      amount:2.5
    }
  })
},[]) 

  return (
    <m.div 
    initial={{opacity:0}}
    animate={{opacity:1,
    transition:{
      duration:1
    }}}
    exit={{opacity:0}}
    className='h-fit w-full relative '>
      <Navbar/>
      <div className='max-w-screen-2xl py-40 px-10 mx-auto'>
        <div className='relative overflow-x-hidden'>
          <img src={color2} alt="the ledbury" className='w-full h-96 object-cover'/>
          <h2 className='text-yellow-500 text-6xl tracking-wide absolute bottom-14 -right-10 -rotate-90' ref={titleRef}>the ledbury.</h2>
        </div>
        <div className='py-20'>
          <div className='overflow-y-hidden'>
            <h1 className='text-7xl' ref={aboutRef}>ABOUT US</h1>
          </div>
          <div className='my-10 overflow-y-hidden'>
            <p ref={pRef}>
            The Ledbury is inspired by our journeys over the past few years. Our cuisine incorporates flavors from the Middle East, the Mediterranean and the Caucasus. We offer Spanish, Italian, Portuguese, Moroccan, Israeli, Lebanese, Georgian, Armenian and Turkish dishes with a curated wine list in our thoughtful, modern space.
            </p>
          </div>
          <div className='flex justify-center items-center flex-col text-3xl leading-relaxed overflow-y-hidden'>
            <div ref={hRef}>
              <h2>FROM THE ATLAS MOUNTAINS TO ARARAT,</h2>
              <h2>FROM THE BOSPORUS TO GIBRALTAR</h2>
              <h2>ALL AT HOME IN BUDAPEST'S SEVENTH DISTRICT</h2>
            </div>
          </div>
          <div className='my-10 overflow-y-hidden'>
            <h2 className='text-7xl text-right' ref={whyRef}>Why come?</h2>
          </div>
          <div className='overflow-y-hidden'>
            <p ref={pRef2}>
            If you’re looking for a break from traditional Hungarian, this Middle Eastern and Mediterranean-leaning restaurant should be one of your go-to's. The influences span far and wide, picking up on Spanish, Italian, Portuguese, Moroccan, Israeli, Lebanese, Georgian, Armenian and Turkish flavours. Patatas bravas sit next to hummus, shakshuka and Piri Piri chicken. The drinks menu is equally varied. 
            </p>
          </div>
        </div>
        <div className=' overflow-y-hidden'>
          <h2 className='text-7xl' ref={menuRef}>our menu</h2>
        </div>
       <Menu/>
       <div className='my-20 text-center'>
        <h2 className='text-7xl'>
          the bar
        </h2>
       </div>
       <ToBar/>
       <Contact/>
      </div>
      <Footer/>
    </m.div>
  )
}

export default Home