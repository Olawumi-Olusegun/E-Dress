import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout';
import { carts } from '../../redux/productSlice/productSlice'
import { CartItem } from '../../components'
import { userInfo } from '../../redux/productSlice/productSlice'

const STRIPE_PUBLISHABLE_KEY = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
const address = "Ikeja Lagos Nigeria";


const Cart = () => {

  const user = useSelector(userInfo);

  const cartsItems = useSelector(carts)

  const dispatch = useDispatch()

  const [totalAmount, setTotalAmount] = useState(0);
  const [isPayNow, setIsPayNow] = useState(false);


  const handleCheckout = () => {

    if(!user) {
      toast.error('Please signin to checkout');
      return;
    }
    setIsPayNow(true);
  }

  const payment = async (token) => {
    try {
      await axios.post('/api/stripe/pay', {
        amount: Number(totalAmount) * 100,
        token: token
      });

      if(localStorage.getItem('cartItems')) {
        localStorage.removeItem('cartItems')
      }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    console.log(localStorage.getItem('persist:root')["cartsItems"])
    let price = 0;
    cartsItems?.map((item) => {
      price += item?.price * item?.quantity;
      return price;
    } )

    price = Number(price.toFixed(2));
    setTotalAmount(price)
  }, [cartsItems])

  return (
    <div>
      <img src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="cart-Image" className='w-full h-60 object-cover' />
      <div className='max-w-screen-xl mx-auto py-10 flex'>
        <CartItem totalAmount={totalAmount} />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart Total</h2>
            <p className='flex items-center gap-4 text-base'>
                Subtotal: <span className='font-titleFont font-bold text-lg'> ${Number(totalAmount) || 0} </span> 
            </p>
            <p className='flex items-center gap-4 text-base'>
                Shipping Address: <span className='font-titleFont  text-base'> { address } </span> 
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6 '> 
            <span className='text-xl font-bold'>Total Amount: ${totalAmount}</span> 
          </p>

          <button onClick={ handleCheckout } className={`bg-black text-white hover:bg-gray-800 text-base w-full py-3 mt-6 duration-300`}>Proceed to checkout</button>
            {
              isPayNow && (
                <div className='mt-4 w-full flex items-center justify-center'>
                <StripeCheckout
                  name="E-Dress online Wears"
                  amount={Number(totalAmount) * 100}
                  label="Pay to E-Dress"
                  description={`Your payment amount is $${Number(totalAmount)}`}
                  token={payment}
                  email= {user?.email}
                  stripeKey={STRIPE_PUBLISHABLE_KEY}
                  />
                </div>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default Cart