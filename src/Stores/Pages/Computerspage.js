import React from 'react'
import Navbar from '../Components/Navbar'
import Computers from '../Components/Computers'
import { computerData } from '../data/computers'

const Computerspage = () => {
  return (
    <>
    <Navbar/>
    <Computers limit={computerData.length}/>
    </>
  )
}

export default Computerspage