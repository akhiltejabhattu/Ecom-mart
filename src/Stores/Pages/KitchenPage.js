import React from 'react'
import Navbar from '../Components/Navbar'
import Kitchen from '../Components/Kitchen'
import { kitchenData } from '../data/kitchen'

const KitchenPage = () => {
  return (
    <>
    <Navbar/>
    <Kitchen limit={kitchenData.length}/>
    </>
  )
}

export default KitchenPage