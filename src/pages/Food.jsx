import React from 'react'
import {useParams} from "react-router-dom"
import { Link } from 'react-router-dom';
import { data } from '../assets/data.js';
import {motion as m} from 'framer-motion'

const Food = () => {

    let { id } = useParams()

  return (
    <m.div
    initial={{y:'-100%'}}
    animate={{y:0,
    transition:{
      duration:.5
    }}}
    exit={{y:'100%',
      transition:{
        duration:1
      }}} 
    className='bg-yellow-500 min-h-screen h-fit py-20 px-5 absolute top-0 left-0 right-0 bottom-0'>
            <div className='max-w-screen-2xl min-h-screen mx-auto py-20 px-10 bg-stone-200 rounded-3xl flex justify-center items-center'>
                {data.filter(food => food.id==id).map((food,i)=>(
                    <div key={i} className='flex flex-wrap'>
                        <div className='flex flex-col max-w-[400px] mr-10'>
                            <h2 className='text-6xl'>{food.name}</h2>
                            <p className='my-8'>{food.ingredients}</p>
                            <p className='text-2xl text-purple-500'>{food.price}</p>
                            <div className='flex my-20'>
                                <div className='mr-10'>
                                <Link to='https://www.foodpanda.hu/?gclid=Cj0KCQiA6fafBhC1ARIsAIJjL8mf-8i8b6Dd4kIqjXJ6BMsLdggZ38kaBx_1v6_MY7nQa8t4Y0TyH3kaAh3aEALw_wcB&ef_id=YxBzDwAD78Q30QBN:20230228181046:s'>
                                        <button className='rounded-full text-white bg-black hover:bg-rose-500 h-12 hover:scale-105 duration-100 w-28'>ORDER</button>
                                    </Link>
                                </div>
                                <div>
                                    <Link to='/'>
                                        <button className='rounded-full h-12 text-white bg-black hover:bg-rose-500 hover:scale-105 duration-100 w-28'>HOME</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-[400px] '>
                            <img src={food.image} alt={food.name} className='object-cover h-full rounded-xl'/>
                        </div>
                    </div>
                ))} 

            
            </div>
    </m.div>
  )
}

export default Food