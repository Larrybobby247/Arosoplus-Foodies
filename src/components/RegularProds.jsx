import { faArrowCircleRight, faArrowLeft, faArrowRight, faNairaSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import {ProductLists} from './ProductLists'  

const RegularProds = () => {
  const regularProds = ProductLists.filter(prod => prod.arrival === 'regular')
  return (
    <div>
      <div className='flex flex-col text-center gap-2 mb-12'>
        <h1 className='text-3xl font-bold lg:text-4xl'>Regular Meals</h1>
        <p className='text-grey'>View our meal categories from our store</p>
      </div>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        {regularProds.map(product => {
          return(
            <div key={product.id} className='' data-aos="fade-right">
              <img src={product.image} alt="" className='rounded-xl h-[340px] w-full object-cover'/>
              <div className='flex flex-col gap-4 my-4 mx-2'>
              <div>
                {/* <p className='text-grey flex gap-2 '>{product.sizeOptions.map(sizeOption => {
                  return <span>{sizeOption}</span>
                })}</p> */}
                <p className='text-grey'>{product.minOrder}</p>
              </div>
                <h3 className='text-2xl font-bold'>{product.name}</h3>
                <p className='text-grey'>{product.description}</p>
                
                <h3 className="text-xl font-bold flex items-center">{product.priceTag} price</h3>
                <button className="btn-primary w-full text-center">
                  <a href='https://wa.me/2348138595384' className="font-medium transition duration-300">Buy Meal</a>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RegularProds
