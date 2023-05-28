import React from 'react'
import { Link } from 'react-router-dom';
import { logoDark, logoLight, paymentLogo } from '../../assets';

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";

import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";



const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
      <div className='max-w-screen-xl mx-auto px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
        <div className='flex flex-col gap-7'>
          <Link to='/'>
            <img src={logoLight} alt="logo-light" className='w-32' />
          </Link>
          <p className='text-white text-sm tracking-wide'> &copy; Ecommerce.com </p>
          <img src={paymentLogo} alt="payment-logo" className='w-56' />
          <div className='flex item-center gap-5 text-lg text-gray-400'>
            <FaHome className='hover:text-white duration-300 cursor-pointer' />
            <FaFacebookF className='hover:text-white duration-300 cursor-pointer' />
            <FaTwitter className='hover:text-white duration-300 cursor-pointer' />
            <FaInstagram className='hover:text-white duration-300 cursor-pointer' />
            <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
          </div>
        </div>
        {/* Location */}
        <div>
        <h2 className='text-2xl font-semibold text-white mb-4'> Locate Us</h2>
        <div className='text-base flex flex-col gap-2'>
          <p>83, Allen Avenue, Ikeja Lagos</p>
          <p>Mobile: +2347064548383</p>
          <p>Phone: +2347064548383</p>
          <p>Email: olawumi.olusegun@gmail.com</p>
        </div>
        </div>

        {/* Profile */}

        <div>
          <h2 className='text-2xl font-semibold text-white mb-4'> Profile</h2>
          <div className='flex flex-col gap-2 text-base'>
          <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span> <BsPersonFill /> </span>  {" "} My Account </p>
          <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span> <BsPaypal /> </span>  {" "} Checkout </p>
          <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span> <FaHome /> </span>  {" "} Order Tracking </p>
          <p className='flex items-center gap-3 hover:text-white duration-300 cursor-pointer'> <span> <MdLocationOn /> </span>  {" "} Help & Support </p>
          </div>
        </div>

        <div className=''>
          <h2 className='text-2xl font-semibold text-white mb-4'> Subscription</h2>
          <div className='flex flex-col justify-center '>
            <input type="text" placeholder='Enter email' className='px-4 bg-transparent border py-2 text-sm' />
            <button className='mt-3 bg-red-500 rounded-sm py-2 text-white font-semibold hover:bg-red-600 duration-300 '>Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer