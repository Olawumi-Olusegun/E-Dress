import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productSlice/productSlice';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const title = String(product?.title).toLocaleLowerCase().split(" ").join("_");

  return (
    <div className='group rounded-md relative'>
      <Link to={`/product/${title}`} state={{ productDetail: product }} >
        <div className='w-full h-96 overflow-hidden'>
          <img src={ product?.image} alt={product?.title} className='w-full h-full object-cover group-hover:scale-110 duration-500' />
        </div>
      </Link>
      <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex items-center justify-between'>
          <h2 className='font-titleFont text-base font-bold'> {product?.title?.substring(0, 15)} </h2>
        
        <div className='flex items-center justify-end gap-2 relative overflow-hidden w-28 text-sm'>
          <div className='flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
            <p className='line-through text-gray-500'>${product?.oldPrice} </p>
            <p className='font-semibold'>${product?.price} </p>
          </div>
          <button type="button" onClick={() => dispatch(addToCart({ ...product, quantity: 0  })) } className='absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500'>
            Add to cart <span> <BsArrowRight /> </span>
          </button>
        </div>
        </div>

        <div>
          <p> {product?.category} </p>
        </div>
        <div className='absolute top-4 right-0'>
          { product?.isNew 
          ? <p className='bg-black text-white font-semibold px-6 py-1'> Sale </p>
          : null 
          } 
        </div>


      </div>
    </div>
  )
}

export default ProductCard