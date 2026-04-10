import React from 'react'
import Img1 from '../assets/banner-img.jpg'

const Banner = () => {
  return (
    <div className=' flex h-[50vh] justify-center lg:justify-between items-center relative'>
          <div className=' overlay w-full h-full'>
            <img src={Img1} alt="" className='h-full w-full object-cover rounded-3xl'/>
          </div>
          <div className='px-6 lg:px-8 xl:px-14 lg:w-[75%] absolute flex flex-col text-white gap-3 justify-center items-center lg:items-start'>
            <h1 className='text-4xl lg:text-[52px] font-bold text-center lg:text-left' data-aos="fade-right">Curating the best food trays in Ibadan</h1>
            <p className='text-lg text-center text-light mb-4 lg:text-left' data-aos="fade-right">Ibadan's favorite spot for premium food trays and variety boxes. We turn your cravings into curated experiences, one box at a time</p>
            <div className='flex gap-4 ' data-aos="fade-right">
                <button className='btn-primary'><a href="#menu">Book Events</a></button>
            </div>
          </div>
        </div>
  )
}

export default Banner
