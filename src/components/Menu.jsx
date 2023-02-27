import React from 'react'
import {data} from '../assets/data.js'

const Menu = () => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
    {data.map((item,index)=>(
        <div key={index}
        className='border shadow-lg rounded-lg hover:scale-105 duration-300 '>
            <img 
            className='w-full h-[200px] object-cover rounded-t-lg'
            src={item.image} alt={item.name} />
            <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-yellow-500 text-white p-1 rounded-full'>{item.price}</span>
                </p>
            </div>
        </div>
    ))}
</div>
  )
}

export default Menu