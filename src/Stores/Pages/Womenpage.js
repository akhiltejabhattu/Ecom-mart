import React from 'react'
import Navbar from '../Components/Navbar'
import Women from '../Components/Women'
import { womanData } from '../data/woman'

const Womenpage = () => {
  return (
    <>
    <Navbar/>
    <Women limit={womanData.length}/>
    </>
  )
}

export default Womenpage