import React from 'react'
import {motion as m} from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import bar2 from '../assets/bar2.png'
import bar3 from '../assets/bar3.png'
import bar4 from '../assets/bar4.png'


const Bar = () => {
  return (
    <m.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    className="min-h-screen w-full relative bg-[url('./assets/barbg3.png')] bg-cover bg-center"
    >
        <Navbar/>
          <div className='py-34 h-fit max-w-screen-2xl mx-auto flex justify-center items-center'>
            <div className='hidden md:grid grid-cols-2 grid-rows-3 gap-6 my-36'>
                <div className='h-[500px] w-[400px] overflow-hidden text-white'>
                  <h2 className='text-3xl tracking-wide'>Our new Pointer Pub is now open!</h2>
                  <p className='my-8'>10 different draft beers are already available including our Hunter’s, Guiness and Fuller’s IPA!</p>
                  <p>Watch sports on large TVs! We also have a large event room available for private events, corporate parties for up to 30 persons.   For event room reservations please call (+36) 70 777 7777.</p>
                </div>
                <div className='h-[500px] w-[400px] overflow-hidden'>
                  <img src={bar2} alt="bar2" className='h-[500px] w-[400px] object-cover rounded-xl'/>
                </div>
                <div className='h-[500px] w-[400px] overflow-hidden'>
                <img src={bar4} alt="bar4" className='h-[500px] w-[400px] object-cover rounded-xl'/>
                </div>
                <div className='h-[500px] w-[400px] overflow-hidden text-white'>
                  <h2 className='text-2xl tracking-wide my-8'>HANG OUT WITH FRIENDS IN A</h2>
                  <h2 className='text-4xl tracking-wide'>GREAT BAR</h2>
                  <p>A Cocktail & Whisky Bar where you can taste more than 500 spirits, may be called extraordinary in its own right. A bar where world class cocktails are made from these drinks and delicious snacks can also be ordered, is certainly even more attractive. But it is good company that makes the GoodSpirit Bar truly extraordinary.</p>
                </div>
                <div className='h-[500px] w-[400px] overflow-hidden text-white'>
                  <h2 className='text-2xl'>WHISKIES AND MORE</h2>
                  <h2 className='text-4xl my-8'>DISTILLATES</h2>
                  <p>The backbone of our spirit selection at the GoodSpirit Bar consists of about 300 various whiskies. Beyond the usual Scottish, Irish, American and Canadian items Japanese, Indian, other European and even Hungarian whiskies are also included in our selection range. Beyond whiskies we offer an extremely wide selection of Spanish, British and French style rums, other French spirits (cognac, armagnac, calvados), other finished and unfinished spirits (gin, pálinka, vodka, pisco, mezcal, tequila, etc.) as well as liqueurs and bitters.</p>
                </div>
                <div className='h-[500px] w-[400px] overflow-hidden'>
                <img src={bar3} alt="bar3" className='h-[500px] w-[400px] object-cover rounded-xl'/>
                </div>
            </div>
            {/* mobile vision */}
            <div className='md:hidden grid grid-rows-6 gap-6 px-10 py-48'>
              <div className='h-[400px] max-w-[400px] overflow-hidden'>
                <img src={bar2} alt="bar2" className='h-[400px] max-w-[400px] object-cover rounded-xl' />
              </div>
              <div className='h-fit max-w-[400px] overflow-hidden text-white flex flex-col justify-center items-center'>
              <h2 className='text-3xl tracking-wide text-white'>Our new Pointer Pub is now open!</h2>
                  <p className='my-8'>10 different draft beers are already available including our Hunter’s, Guiness and Fuller’s IPA!</p>
                  <p>Watch sports on large TVs! We also have a large event room available for private events, corporate parties for up to 30 persons.   For event room reservations please call (+36) 70 777 7777.</p>
              </div>
              <div className='h-[400px] max-w-[400px] overflow-hidden'>
              <img src={bar4} alt="bar4" className='h-[400px] max-w-[400px] object-cover rounded-xl min-w-[350px]' />
              </div>
              <div className='h-fit max-w-[400px] overflow-hidden text-white'>
              <h2 className='text-2xl tracking-wide my-8'>HANG OUT WITH FRIENDS IN A</h2>
                  <h2 className='text-4xl tracking-wide'>GREAT BAR</h2>
                  <p>A Cocktail & Whisky Bar where you can taste more than 500 spirits, may be called extraordinary in its own right. A bar where world class cocktails are made from these drinks and delicious snacks can also be ordered, is certainly even more attractive. But it is good company that makes the GoodSpirit Bar truly extraordinary.</p>
              </div>
              <div className='h-[400px] max-w-[400px] overflow-hidden'>
              <img src={bar3} alt="bar4" className='h-[400px] w-[400px] object-cover rounded-xl' />
              </div>
              <div className='h-fit max-w-[400px] overflow-hidden text-white'>
              <h2 className='text-2xl'>WHISKIES AND MORE</h2>
                  <h2 className='text-4xl my-8'>DISTILLATES</h2>
                  <p>The backbone of our spirit selection at the GoodSpirit Bar consists of about 300 various whiskies. Beyond the usual Scottish, Irish, American and Canadian items Japanese, Indian, other European and even Hungarian whiskies are also included in our selection range. Beyond whiskies we offer an extremely wide selection of Spanish, British and French style rums, other French spirits (cognac, armagnac, calvados), other finished and unfinished spirits (gin, pálinka, vodka, pisco, mezcal, tequila, etc.) as well as liqueurs and bitters.</p>
              </div>

            </div>
          </div>
        <Footer/>
    </m.div>
  )
}

export default Bar