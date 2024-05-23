import React from 'react'
import Navbar from '../Components/Navbar'
import Watch from '../Components/Watch'
import { watchData } from '../data/watch'

const Watchpage = () => {
  return (
    <>
    <Navbar/>
    <Watch limit={watchData.length}/>
    </>
  )
}

export default Watchpage