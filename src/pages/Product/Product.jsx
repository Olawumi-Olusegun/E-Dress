import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/productSlice/productSlice';
import { toast } from 'react-toastify';


const Product = () => {
    const [productDetail, setProductDetail] = useState({})
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch()

    const location = useLocation()

    useEffect(() => {

        const singlItem = location?.state?.productDetail;

        setProductDetail({ ...singlItem, quantity: Number(qty) })

    }, [])

  return (
    <div className='max-w-screen-xl mx-auto my-10 flex gap-10'>
        <div className='w-2/5 relative'>
            <img className='w-full h-[550px] object-cover' src={productDetail?.image} alt={productDetail?.title} />
            <div className='absolute top-4 right-0'>
                {
                    productDetail.isNew 
                    ? <p className='bg-black text-white font-semibold font-titleFont px-8 py-1'>Sale</p>
                    : null
                }
            </div>
        </div>
        <div className='w-3/5 '>
            <div>
                <h2 className='text-4xl font-semibold'> {productDetail?.title} </h2>
            
            <div className='mt-4 flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500'>
                <p className='line-through text-gray-500 text-2xl'>${productDetail?.oldPrice} </p> { " " }
                <p className='font-semibold text-4xl'>${productDetail?.price} </p>
            </div>

            <div className='flex items-center gap-2 text-base mt-4'>
                <div className='flex gap-1 items-center'>
                <MdOutlineStar className='cursor-pointer text-2xl ' />
                <MdOutlineStar className='cursor-pointer text-2xl ' />
                <MdOutlineStar className='cursor-pointer text-2xl ' />
                <MdOutlineStar className='cursor-pointer text-2xl ' />
                <MdOutlineStar className='cursor-pointer text-2xl ' />
                </div>
                <p className='text-xs text-gray-500'>( 1 Customer review )</p>
            </div>

            <p className='text-base text-gray-500 mt-4'>{ productDetail?.description}</p>

            <div className='flex items-center gap-4 mt-6'>
                <div className=' w-52 flex items-center justify-between text-gray-5-- gap-4 border p-3'>
                    <p className='text-sm'> Quantity:  </p>
                    <div className='flex items-center gap-4 text-sm font-semibold '>
                        <button onClick={() => qty === 1 ? null : setQty(qty === 1 ? 1 : qty - 1)} className='border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>-</button>
                        <span> { qty } </span>
                        <button onClick={() => setQty((prevState) => prevState + 1 )  } className='border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black'>+</button>
                    </div>
                </div>
                <button onClick={ () => { 
                        dispatch(addToCart({ ...productDetail, quantity: Number(qty) })); 
                        toast.success(`${productDetail?.title} added to cart` ) 
                    } } className='bg-black text-white py-3 px-6 active:bg-gray-800'>
                    Add to cart
                </button>
            </div>

            <p className='text-base text-gray-500 mt-4'>Category: <span className='font-medium capitalize'>{productDetail?.category}</span>  </p>

            </div>
        </div>
    </div>
  )
}

export default Product