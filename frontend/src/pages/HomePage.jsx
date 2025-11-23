import React, { useEffect } from 'react'
import { Navbar } from '../features/navigation/components/Navbar'
import { ProductList } from '../features/products/components/ProductList'
import { resetAddressStatus, selectAddressStatus } from '../features/address/AddressSlice'
import { useDispatch, useSelector } from 'react-redux'
import {Footer} from '../features/footer/Footer'
import { HeroSection } from '../features/products/components/HeroSection'
import { Box } from '@mui/material'

export const HomePage = () => {

  const dispatch=useDispatch()
  const addressStatus=useSelector(selectAddressStatus)

  useEffect(()=>{
    if(addressStatus==='fulfilled'){

      dispatch(resetAddressStatus())
    }
  },[addressStatus, dispatch])

  return (
    <Box sx={{ backgroundColor: '#0D0D0D', minHeight: '100vh' }}>
      <Navbar isProductList={true}/>
      <HeroSection />
      <Box id="products-section">
        <ProductList/>
      </Box>
      <Footer/>
    </Box>
  )
}
