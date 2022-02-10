import React from 'react'
import whiteLogo from '.././images/white-logo.png' 
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/' className="logo">
                <img src={whiteLogo} alt="logo" />
                <p>Restaurant Service</p>
            </Link>
            <div className="links">
                <Link className="link" to='/dishes'>Dish List</Link>
                <Link className="link" to='/dishes/create'>Add Dish</Link>
                <Link className="link" to='/orders'>Order List</Link>
                <Link className="link" to='/orders/create'>Add Order</Link>
            </div>
        </div>
    )
}

export default Navbar
