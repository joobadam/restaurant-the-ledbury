import React from 'react'
import {RxTwitterLogo} from 'react-icons/rx'
import {FiGithub} from 'react-icons/fi'
import { SlSocialLinkedin} from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-yellow-500 absolute bottom-0 w-full'>
        <div className=' text-white p-10 max-w-screen-2xl flex justify-between'>
            <div className='flex justify-center items-center flex-col'>
                <p>&copy; 2023. All Rights Reserved.</p>
                <p className='text-sm'>Made by  
                <span className='text-black ml-1 uppercase'>
                Joobadam
                </span>
                </p>
            </div>
            <div className='flex'>
                <div>
                    <Link to='https://twitter.com/joobadam'>
                        <RxTwitterLogo size={40} className='hover:text-black hover:scale-125 duration-300'/>
                    </Link>
                </div>
                <div className='mx-6'>
                    <Link to='https://github.com/joobadam'>
                        <FiGithub size={40} className='hover:text-black hover:scale-125 duration-300'/>
                    </Link>
                </div>
                <div>
                    <Link to='https://www.linkedin.com/in/%C3%A1d%C3%A1m-juh%C3%A1sz-1b8782266/'>
                        <SlSocialLinkedin size={40} className='hover:text-black hover:scale-125 duration-300'/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer