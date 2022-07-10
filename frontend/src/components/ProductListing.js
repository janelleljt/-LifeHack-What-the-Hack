import React from 'react'
import '../css/ProductListing.css'
import Navbar from './Navbar'
import IndivListing from './IndivListing'
import { useState } from 'react'

function ProductListing() {

  const [type, setType] = useState("Price")


  return (
    <>
      <Navbar/>
      
      <div className='listing'>
          <div className='listing-header'>
            <h4 className='listing-type'>{type}</h4>
            <div className='listing-changetype'>
              <label for='type'>sort by: </label>
              <select name='type' id='type' onInput={x => setType(x.target.value)}>
                <option value='Price'>Price</option>
                <option value='Location'>Location</option>
              </select>
            </div>
          </div>

          <div className='listing-container'>
            <IndivListing/>
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