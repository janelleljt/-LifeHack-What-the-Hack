import React from 'react'
import '../css/Navbar.css'
import logo from '../images/icons8-phoenix-48.png'
import lock from '../images/icons8-lock-50.png'

function Navbar() {
  return (
    <div className='navbar'>
        {/* logo should link back to home page */}
        <div className='navbar-item1'>
            <img src={logo} alt='logo' className='navbar-logo'/>
            <div className='navbar-name'>
                second chance
            </div>
        </div>

        {/* company login should go to the */}
        <div className='navbar-item2'>
            <img src={lock} alt='lock-icon' className='navbar-lockicon'/>
            <h4 className='navbar-login'>
                seller login
            </h4>
        </div>
        
        
    </div>
  )
}

export default Navbar