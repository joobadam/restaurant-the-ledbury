import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Food from '../pages/Food'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import {AnimatePresence} from 'framer-motion'
import LoadingMask from './LoadingMask'
import Bar from '../pages/Bar'


const AnimatedRoutes = () => {

    const [enter, setEnter] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setEnter(false)
        },7500)
    },[enter])

    const location = useLocation()

  return (
    
    <AnimatePresence>
        {enter? <LoadingMask/>:
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/bar' element={<Bar/>}/>
        </Routes>}
    </AnimatePresence>
  )
}

export default AnimatedRoutes