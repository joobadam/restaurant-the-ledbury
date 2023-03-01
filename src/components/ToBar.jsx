import React from 'react'
import { Link } from 'react-router-dom'
import bar from '../assets/bar.png'

const toBar = () => {
  return (
    <div>
        <div>
            <Link to='/bar'>
            <div className='relative hover:scale-105 duration-300 hover:bg-purple-500 '>
                <h2 className='abolute top-4 left-4 text-5xl text-white'>if you only have one drink</h2>
                <h2 className='absolute bottom-0 -right-10 text-6xl md:text-9xl -rotate-90'>just click</h2>
              <img src={bar} alt="bar" className='max-h-[450px] object-cover w-full rounded-tr-full'/>  
            </div>
            </Link>
        </div>
    </div>
  )
}

export default toBar