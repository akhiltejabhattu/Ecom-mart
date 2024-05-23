import React from 'react'
import Navbar from '../Components/Navbar'
import Tv from '../Components/Tv'
import { tvData } from '../data/tv'

const Tvpage = () => {
  return (
    <>
    <Navbar/>
    <Tv limit={tvData.length}/>
    </>
  )
}

export default Tvpage