import React from 'react'
import { ProductCard } from './../../components'

const Products = ({ products }) => {

  return <div className='py-10'>
    <div className='flex flex-col items-center gap-4'>
        <h1 className='text-2xl bg-black text-white py-2 w-80 mx-auto text-center rounded'>Shopping Everyday</h1>
        <span className='w-20 h-[3px] bg-black rounded-full'></span>
        <p className='max-w-[700px] mx-auto text-gray-600 text-center'>
            We provide you with the best fashion products ranging from Clothing, Shoes, Wristwatches, Sunglasses, Colognes, Accessories and much more
        </p>
    </div>

        <div className='max-w-screen-xl mx-auto py-10 px-3 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                products ? products?.map((product) => <ProductCard key={product?._id} product={product} /> ) : null
            }            
        </div>
  </div>
}

export default Products