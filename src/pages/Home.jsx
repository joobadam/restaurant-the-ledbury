import React, {useRef,useEffect} from 'react'
import {motion as m} from 'framer-motion'
import color2 from '../assets/color2.png'
import gsap from 'gsap';
import Menu from '../components/Menu';
import ToBar from '../components/ToBar'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Mobile from '../components/Mobile';




const Home = () => {


  const titleRef= useRef(null)
  const aboutRef= useRef(null)
  const pRef= useRef(null)
  const hRef= useRef(null)
  const whyRef= useRef(null)
  const pRef2= useRef(null)
  const menuRef= useRef(null)
  
  
  const tl = gsap.timeline()

  gsap.registerPlugin(ScrollTrigger)
  

useEffect(()=>{
  let ctx = gsap.context(()=>{
    const titleAnimate = gsap.from(titleRef.current,{duration:1.5,delay:1.5, x:'100%', ease:'elastic'})
    const scroll = gsap.from([aboutRef.current,pRef.current,hRef.current,whyRef.current,pRef2.current],{
      stagger:.8,
      y: '100%',
      scrollTrigger:{
        trigger:'#start',
        start:'bottom top',
        end:800,
        scrub:true,
        pin:true
      }
    })
  })



  return ()=> ctx.revert()
},[])
  return (
    <m.div 
    initial={{y:'-100%'}}
    animate={{y:0,
    transition:{
      duration:1
    }}}
    exit={{y:'-100%',
      transition:{
        duration:.5
      }}} 
    className='h-fit w-full absolute top-0 left-0 right-0 bottom-0 bg-stone-200' >
      <Navbar/>
      <div className='max-w-screen-2xl py-40 px-10 mx-auto'>
        <div className='relative overflow-x-hidden'>
          <img src={color2} alt="the ledbury" className='w-full h-96 object-cover'/>
          <h2 className='text-yellow-500 text-6xl tracking-wide absolute bottom-14 -right-10 -rotate-90' ref={titleRef}>the ledbury.</h2>
        </div>
        <div className='py-20'>
          <div className='overflow-y-hidden'>
            <h1 className='text-7xl' ref={aboutRef} id='about'>ABOUT US</h1>
          </div>
          <div className='my-10 overflow-y-hidden'>
            <p ref={pRef}>Oinos Bistro offers a wide selection of Italian and Mediterranean dishes, benchmark wines and heritage cocktails with an unforgettable dining experience.
            </p>
          </div>
          <div className='flex justify-center items-center flex-col text-3xl leading-relaxed overflow-y-hidden'>
            <div ref={hRef}>
              <p>Visit our freshly renovated restaurant and experience our collection of house-made pastas, pizzas and bistro dishes we offer. Visit us to feel our love with every bite of food and every sip of drink</p>
            </div>
          </div>
          <div className='my-10 overflow-y-hidden'>
            <h2 className='text-7xl text-right' ref={whyRef}>Why come?</h2>
          </div>
          <div className='overflow-y-hidden'>
            <p ref={pRef2}>When compiling our wine selection, we primarily took into account the needs of our guests. Thus, those who vote for us can find everything from popular, lighter white wines to more complex, barrel-aged reds.
            <br /><br />
            We believe that whether it is lunch or dinner, a bottle of wine always has a place on the table, which combined with the milieu of our restaurant provides a lasting experience
            </p>
          </div>
        </div>
        <div className=' overflow-y-hidden'>
          <h2 className='text-7xl' ref={menuRef}>our menu</h2>
        </div>
       <Menu/>
       <Mobile/>
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

