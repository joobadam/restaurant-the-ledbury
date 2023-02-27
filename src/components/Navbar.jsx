import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {CgMenuCheese} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {motion as m} from 'framer-motion'

const Navbar = () => {


  const [menu, setMenu] =useState(false)

  return (
    <div className='bg-black text-white uppercase fixed z-50 w-full'>
        <div className='max-w-screen-2xl py-10 mx-auto px-10 sm:block hidden'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-4xl tracking-wide'>the ledbury.</h1>
            </div>
            <div>
              <ul>
                <Link to='/'>
                  Home
                </Link>
                <Link to='/bar' className='ml-5'>
                  <h2 className='inline text-2xl text-purple-500'>/The Bar</h2>
                </Link>
                <Link className='mx-5' to='/gallery'>
                  Gallery
                </Link>
                <Link to='https://www.foodpanda.hu/?gclid=CjwKCAiAxvGfBhB-EiwAMPakqvPSGdlsi4nKBIrMfvx27h-UOZiLLxX1EKu9o97PT5EN4SdufaEnCRoCmOMQAvD_BwE&ef_id=YxBzDwAD78Q30QBN:20230227143619:s'>
                  Order
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        {menu?"":<div className='sm:hidden  px-10 flex justify-between items-center py-14'
        >
            <div>
              <h1 className='text-4xl tracking-wide'>the ledbury.</h1>
            </div>
            <div onClick={()=>setMenu(true)}>
                <CgMenuCheese size={40}/>
            </div>
        </div>}
         <div className={menu?'bg-black h-[400px] absolute top-0 w-full translate-y-0 sm:hidden flex flex-col justify-center items-center duration-500':'bg-black h-[400px] absolute top-0 w-full -translate-y-[100%] sm:hidden flex flex-col justify-center items-center duration-500'}>
            <div className='flex flex-col justify-center items-center'>
              <div className='py-4 w-32 border-b border-gray-300 text-center'>
                <Link to='/'>
                  <h2 className='text-4xl tracking-wide'>home</h2>
                </Link>
              </div>
              <div className='py-4 w-32 border-b border-gray-300 text-center'>
                <Link to='/bar'>
                  <h2 className='text-4xl tracking-wide'>the bar</h2>
                </Link>
              </div>
              <div className='py-4 w-32 border-b border-gray-300 text-center'>
                <Link to='/gallery'>
                  <h2 className='text-4xl tracking-wide'>gallery</h2>
                </Link>
              </div>
              <div className='py-4 w-32 border-b border-gray-300 text-center mb-12'>
                <Link to='https://www.foodpanda.hu/?gclid=CjwKCAiAxvGfBhB-EiwAMPakqvPSGdlsi4nKBIrMfvx27h-UOZiLLxX1EKu9o97PT5EN4SdufaEnCRoCmOMQAvD_BwE&ef_id=YxBzDwAD78Q30QBN:20230227143619:s'>
                  <h2 className='text-4xl tracking-wide'>to order</h2>
                </Link>
              </div>
              <div>
                <CgCloseO 
                size={30} 
                className='text-white' 
                onClick={()=>setMenu(false)}/>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Navbar