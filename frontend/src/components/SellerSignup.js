import React from "react";
//import Navbar from 'Navbar.js';
import '../css/SellerSignup.css';

const SellerSignup = () => {

    return(
        <view className="view">
            {/* <Navbar/> */}
            <div className="sellerSignupHeader">
                <h1 className="sellerSignupHeaderText">Seller Signup</h1>
            </div>
            <div className="sellerSignupBody">
                <label className="sellerSignupHeaderText">
                    Username 
                </label>
                <input type="text" id="name" name="name" placeholder="Username (minimum 4 char)" required
                    minlength="4"/>
                <label className="sellerSignupHeaderText">
                    Password 
                </label>
                <input type="password" id="name" name="name" placeholder="Password"/>
            </div>
        </view> 
    );
}

export default SellerSignup;