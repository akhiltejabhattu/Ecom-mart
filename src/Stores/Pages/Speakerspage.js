import React from 'react'
import Navbar from '../Components/Navbar'
import Speaker from '../Components/Speaker'
import { speakerData } from '../data/speaker'

const Speakerpage = () => {
  return (
    <>
    <Navbar/>
    <Speaker limit={speakerData.length}/>
    </>
  )
}

export default Speakerpage