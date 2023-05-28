import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartImg, logoDark } from './../../assets/index'
import { carts, userInfo } from '../../redux/productSlice/productSlice'


const Header = () => {

    const cartLength = useSelector(carts)
    const user = useSelector(userInfo)

    console.log({ user })
  return (
    <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-300 font-titleFont sticky top-0 z-50'>
        <div className='max-w-screen-xl h-full mx-auto flex items-center justify-between  '>
            <Link to='/'>
                <img className='w-28' src={logoDark} alt="logo-dark" />
            </Link>
            <div className='flex item-center gap-8'>
                <ul className='flex item-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'><Link to="/">Home </Link></li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'><Link to="/">Page</Link></li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'><Link to="/cart">Shop</Link></li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'><Link to="/">Element</Link></li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'><Link to="/">Blog</Link></li>
                   
                </ul>
                <div className='relative'>
                    <Link to='/cart'>
                        <img src={cartImg} alt="cart-image" className='w-6' />
                        <span className='absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold'>{ cartLength?.length || 0 }</span>
                    </Link>
                </div>
                <Link to='/login' className='flex items-center space-x-2'>
                    <div className='w-8 h-8 rounded-full overflow-hidden'>
                            <img className='object-contain' 
                            src={user?.image} 
                            alt="avatar" 
                            onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src = 'https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png';
                            }}
                            />
                    </div>
                    <div>
                        { user  ? <p> { user?.name } </p> : null }
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header