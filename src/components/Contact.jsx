import React from 'react'
import outside from '../assets/outside.jpeg'

const Contact = () => {
  return (
    <div>
        <div className='bg-white py-10 my-20 h-fit rounded-2xl flex justify-center items-center gap-6 flex-wrap'>
            <div >
                <img src={outside} alt="outside" className='rounded-md' />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <h2 className='text-4xl'>contact</h2>
                </div>
                <p>local: 1021 Budapest, Állatkert utca 21.</p>
                <p>phone: +36707777777</p>
                <div>
                <div className='text-center my-10'>
                <h2 className='text-2xl mb-3'>
                  OPENING HOURS
                </h2>
              <div className='grid grid-cols-2'>
                <div><h2 className='tracking-wide text-2xl'>MONDAY</h2></div>
                <div>12:30 - 23:00</div>
              </div>
              <div className='grid grid-cols-2'>
                <div><h2 className='tracking-wide text-2xl'>TUESDAY</h2></div>
                <div>12:00 - 23:00</div>
              </div>
              <div className='grid grid-cols-2'>
                <div><h2 className='tracking-wide text-2xl'>WEDNESDAY</h2></div>
                <div>12:00 - 23:00</div>
              </div>
              <div className='grid grid-cols-2'>
                <div><h2 className='tracking-wide text-2xl'>THURSDAY</h2></div>
                <div>12:00 - 23:00</div>
              </div>
              <div className='grid grid-cols-2'>
                <div><h2 className='tracking-wide text-2xl'>FRIDAY</h2></div>
                <div>12:00 - 23:00</div>
              </div>
              <div className='grid grid-cols-2'>
                <div><h2 className='tracking-wide text-2xl'>SATURDAY</h2></div>
                <div>12:00 - 23:00</div>
              </div>
              <div className='grid grid-cols-2'>
                <div><h2 className='tracking-wide text-2xl'>SUNDAY</h2></div>
                <div>12:00 - 22:00</div>
              </div>
            </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact