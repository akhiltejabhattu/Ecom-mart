import React from 'react'
import Navbar from '../Components/Navbar'
import Men from '../Components/Men'
import { menData } from '../data/men'

const Menpage = () => {
  return (
    <>
    <Navbar/>
    <Men limit={menData.length}/>
    
    </>
  )
}

export default Menpage