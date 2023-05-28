import React, { useEffect, useState } from 'react'
import { Banner } from '../../components'
import { Products } from '../index'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
  const productData = useLoaderData()
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts(productData)
  }, [])

  return <>
    <Banner />
    <Products products={products} />
  </>
}

export default Home