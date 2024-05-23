import React from 'react'
import Navbar from '../Components/Navbar'
import Books from '../Components/Books'
import { booksData } from '../data/books'

const Bookspage = () => {
  return (
    <>
    <Navbar/>
    <Books limit={booksData.length}/>
    </>
  )
}

export default Bookspage