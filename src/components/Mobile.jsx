import React from 'react'
import { Link } from 'react-router-dom'
import mobile2 from '../assets/mobile2.png'

const Mobile = () => {
  return (
    <div>
        <div className='h-fit max-w-screen-2xl mx-auto flex px-10 py-10 justify-center items-center flex-wrap'>
            <div className='max-w-[400px]'>
                <h2 className='text-5xl'>If you don't have time to come to us...</h2>
            </div>
            <Link to='https://www.foodpanda.hu/?gclid=CjwKCAiAxvGfBhB-EiwAMPakqvPSGdlsi4nKBIrMfvx27h-UOZiLLxX1EKu9o97PT5EN4SdufaEnCRoCmOMQAvD_BwE&ef_id=YxBzDwAD78Q30QBN:20230227143619:s'>
                <div className='max-w-[400px] relative hover:scale-x-110 duration-300 hover:-translate-y-20'>
                    <img src={mobile2} alt="mobile"/>
                </div>
            </Link>
        
        </div>
    </div>
  )
}

export default Mobile