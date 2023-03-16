import React from 'react'
import Openhours from '../../components/Openhours'
import ProductTypes from '../../components/ProductTypes'
import TempChef from '../../components/TempChef'
// import TestChef from '../../components/TestChef'

const Chefs = () => {
  return (
    <>
      <TempChef />
      {/* <TestChef /> */}
      <ProductTypes/>
      <Openhours />
    </>
  )
}

export default Chefs