import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  deleteFromCart, carts, resetCart, decrementCartQuantity, incrementCartQuantity } from '../../redux/productSlice/productSlice'
import { MdOutlineClose } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { HiOutlineArrowLeft } from 'react-icons/hi'

const CartItem = () => {
    const cartsItems = useSelector(carts)
    const dispatch = useDispatch()



  return (
    <div className='w-2/3 pr-10'>
       <div className='w-full '>
            <h2 className='font-titleFont'>Shopping Cart</h2>
       </div>
       <div>
        {
            cartsItems.length > 0 ? cartsItems?.map((product) => (
                <div key={`${product?._id}`} className='flex items-center justify-between gap-6 mt-6'>
                    <div className='flex items-center gap-2'  onClick={() => dispatch(deleteFromCart({ ...product })) }>
                        <MdOutlineClose className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
                        <img className='w-32 h-32 object-cover rounded-md' src={product?.image} alt={product?.title} />
                    </div>
                    <h2 className='w-52'>{product?.title}</h2>
                    <p className='w-10'>${product?.price}</p>

                    <div className='flex items-center gap-4 mt-6'>
                <div className=' w-52 flex items-center justify-between text-gray-5-- gap-4 border p-3'>
                    <p className='text-sm'> Quantity:  </p>
                    <div className='flex items-center gap-4 text-sm font-semibold '>
                        <button onClick={() => product.quantity === 1 ? null :  dispatch(decrementCartQuantity({ ...product }))} className='border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                        <span> {product?.quantity} </span>
                        <button onClick={() => dispatch(incrementCartQuantity({ ...product })) } className='border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                    </div>
                </div>

            </div>


                <p>${ product?.quantity * product?.price } </p>
                </div>
            )) : <h2> Cart is empty </h2>
        }
       </div>
       {
        cartsItems?.length > 0 
        ? <button type="button" className='bg-red-500 text-white mt-8 ml-7 py-1 px-4' onClick={() => dispatch(resetCart()) }>Reset Cart</button>
        : null 
       }

       <Link to='/'>
            <button className='mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300'>
                <span>
                    <HiOutlineArrowLeft />
                </span>
                Go shopping
            </button>
       </Link>
    </div>
  )
}

export default CartItem