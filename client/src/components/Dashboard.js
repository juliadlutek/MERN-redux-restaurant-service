import React from 'react'
import whiteLogo from '.././images/white-logo.png' 
import { Link } from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="content">
                <div className="logo">
                    <img src={whiteLogo} alt="logo" />
                    <p>Restaurant Service</p>
                </div>
                <div className="slogan">
                    <p>easy, fast {"&"}tasty.</p>
                </div>
                <div className="buttons">
                    <Link className="button" to='/dishes'>Dishes</Link>
                    <Link className="button" to='/orders'>Orders</Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
