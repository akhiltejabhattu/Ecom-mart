import React from 'react'
import Ac from '../Components/Ac'
import Navbar from '../Components/Navbar'
import { mobileData } from '../data/mobiles'

const AcPage = () => {
  return (
    <>
    <Navbar/>
    <Ac limit={mobileData.length}/>
    </>
  )
}

export default AcPage