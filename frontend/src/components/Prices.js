import React from 'react'
import '../css/Prices.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

function Prices() {
  return (
    <div>
        <Navbar/>
    <div className='Price'>
        <div className='PriceQues'>
            <h1>Choose Price Range</h1>
        </div>

        <div className='selectPrice'>
            
            <select name="prices" id="prices">
                <option value="none">-</option>
                <option value="0">0-5</option>
                <option value="5">6-10</option>
                <option value="10">11-15</option>
                <option value="15">16-20</option>
                <option value="20">21-25</option>
                <option value="25">26-30</option>
                <option value="30">31-35</option>
                <option value="35">36-40</option>
                <option value="40">41-45</option>
                <option value="45">46-50</option>
                <option value="50">51-55</option>
                <option value="55">56-60</option>
                <option value="60">61-65</option>
                <option value="70">66-70</option>
                <option value="75">71-75</option>
                <option value="80">76-80</option>
                <option value="85">81-85</option>
                <option value="90">86-90</option>
                <option value="95">91-95</option>
                <option value="100">96-100</option>
            </select>
        </div>

        <div className='PriceLink'>
            <Link to='/listing' className='pricelink'>Continue</Link>
        </div>
    </div>
    </div>
  )
}

export default Prices