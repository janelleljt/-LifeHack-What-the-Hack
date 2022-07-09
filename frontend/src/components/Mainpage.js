import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Mainpage.css';
import Navbar from './Navbar';

function Mainpage() {
  return (
    <div className='Mainpage'>
        <div>
            <Navbar/>
        </div>
        <div className='Main'>
            <h1 className='Mainheader'>What are you looking for?</h1>
        </div>

        <div className='Mainlinks'>
            <Link to='/location' className='Link1'>Filter by Locations</Link>
            <Link to='/prices' className='Link2'>Filter by Prices</Link>
        </div>
    </div>
  )
}

export default Mainpage
