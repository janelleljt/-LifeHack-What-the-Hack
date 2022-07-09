import React from 'react'
import Navbar from './Navbar'
import fruit from '../images/fruits.png'
import '../css/ProductInfoPage.css'

function ProductInfoPage() {
  return (
    <>
        <Navbar/>
        
        <div className='productinfo'>
            <div className='productinfo-details'>
                <img src={fruit} alt='fruit' className='productinfo-image'/>
                <div className='productinfo-tags'>
                    <p className='productinfo-indivtag'>Fairprice 'Finest'</p>
                    <p className='productinfo-indivtag'>Sembawang</p>
                </div>    
                <h4 className='productinfo-name'>1kg Granny Smith Apple</h4>
                <p className='productinfo-desc'>Some information about the product here</p>
            </div>
            <img src={fruit} alt='fruit' className='productinfo-maps'/>
        </div>
    </>
  )
}

export default ProductInfoPage