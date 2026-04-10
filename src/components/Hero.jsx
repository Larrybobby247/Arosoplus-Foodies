import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Img1 from '../assets/hero-img.jpeg'

const Hero = () => {
  return (
    <div className='mx-8 md:mx-14 lg:mx-20 flex h-[82dvh] justify-center lg:justify-between items-center relative'>
      <div className=' overlay w-full h-full'>
        <img src={Img1} alt="" className='h-full w-full object-cover rounded-3xl'/>
      </div>
      <div className='px-6 lg:px-28 xl:px-36 absolute flex flex-col text-white gap-3 lg:gap-6 lg:gap-6 justify-center items-center'>
        <h1 className='text-4xl lg:text-[52px] font-bold text-center' data-aos="fade-right"> Premium Catering for Unforgettable Moments.</h1>
        <p className='text-lg text-center text-light mb-4' data-aos="fade-right">Elevate your events with our exquisite culinary experiences. From weddings to corporate gatherings in Ibadan and Lagos, we bring "premium" to your plate.</p>
        <div className='flex gap-4 ' data-aos="fade-right">
            <button className='btn-primary'><a href="#menu">View Menu</a></button>
            
        </div>
      </div>
    </div>
  )
}

export default Hero
