import React from 'react'
import '../css/ProductListing.css'
import Navbar from './Navbar'
import IndivListing from './IndivListing'

function ProductListing() {
  return (
    <>
      <Navbar/>
      
      <div className='listing'>
          <div className='listing-header'>
            <h4 className='listing-type'>Price</h4>
            <div className='listing-changetype'>
              <label for='type'>sort by: </label>
              <select name='type' id='type'>
                <option value='price'>Price</option>
                <option value='location'>Location</option>
              </select>
            </div>
          </div>

          <div className='listing-container'>
            <IndivListing id='listing-indivlisting'/>
            <IndivListing/>
            <IndivListing/>
            <IndivListing/>
            <IndivListing/>
            <IndivListing/>
          </div>
      </div>
    </>
  )
}

export default ProductListing