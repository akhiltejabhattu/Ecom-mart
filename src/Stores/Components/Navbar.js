import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="navcon">
        <div className="title">
            <h1>Ecom-Mart</h1>
        </div>
        <div className="search">
            <input type="text" placeholder='Search Here'/>
        </div>
        <div className="user">
            <div className="user-details">
                SignIn/SignUp
            </div>
            <div className="cart">
                Cart
            </div>
        </div>
    </div>
    <div className="category-menu">
        <ul>
        <Link to="/ac"><li>Ac</li></Link>
        <Link to='/books'><li>Books</li></Link>
        <Link to='/computers'><li>Computers</li></Link>
        <Link to="/fridges"><li>Fridges</li></Link>
        <Link to="/furniture"><li>Furnitures</li></Link>
        <Link to="/kitchen"><li>Kitchen</li></Link>
        <Link to="/men"><li>Men</li></Link>
        <Link to="/mobiles"><li>Mobiles</li></Link>
        <Link to="/speakers"><li>Speakers</li></Link>
        <Link to="/tvs"><li>Tv's</li></Link>
        <Link to="/watches"><li>Watches</li></Link>
        <Link to="/women"><li>Women</li></Link>
        </ul>
    </div>
    </>

  )
}

export default Navbar