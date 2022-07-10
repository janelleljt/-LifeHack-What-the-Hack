import React from 'react'
import '../css/Navbar.css'
import logo from '../images/icons8-phoenix-48.png'
import lock from '../images/icons8-lock-50.png'
import { Link } from 'react-router-dom'
import profile from '../images/profilepic.png'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/' className='navbar-item1'>
            <img src={logo} alt='logo' className='navbar-logo'/>
            <div className='navbar-name'>
                second chance
            </div>
        </Link>
        <div className='navbar-right'>
            <Link to='login' className='navbar-item2'>
                <img src={lock} alt='lock-icon' className='navbar-lockicon'/>
                <h4 className='navbar-login'>
                    seller login
                </h4>
            </Link>
            <Link to='sellersignup' className='navbar-item2'>
                <h4 className='navbar-signup'>
                    seller signup
                </h4>
            </Link>
            
            <Link to='companylisting' className='navbar-item3'>
                <img src={profile} alt='profile-icon' className='navbar-profile'/>
        </Link>
        </div>
    </div>
  )
}

export default Navbar