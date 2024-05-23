import React from 'react'
import Mobiles from '../Components/Mobiles'
import Navbar from '../Components/Navbar'
import { mobileData } from '../data/mobiles'
const MobilePage = () => {
  return (
    <>
    <Navbar/>
    <Mobiles limit={mobileData.length}/>
    </>
  )
}

export default MobilePage