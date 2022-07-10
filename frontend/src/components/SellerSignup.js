import React from "react";
import Navbar from "./Navbar";
import '../css/SellerSignup.css';

const SellerSignup = () => {
    
    const handleSubmit = () => {

    }

    return(
        <view className="view">
            <Navbar/>
            <div className="sellerSignupHeader">
                <h1 className="sellerSignupHeaderText">Seller Signup</h1>
            </div>
            <div className="sellerSignupBody">
                <div className="rowItem">
                    <p className="sellerSignupHeaderText">
                        Username 
                    </p>
                    <input className="sellerSignupInput" type="text" id="username" name="username" required
                        minlength="4"/>
                </div>
                <div className="rowItem">
                    <p className="sellerSignupHeaderText">
                        Password 
                    </p>
                    <input className="sellerSignupInput" type="password" id="password" name="password"/>
                </div>
            </div>
            <div className="sellerSignupBody">
                <div className="rowItem">
                    <p className="sellerSignupHeaderText">
                        Company Name 
                    </p>
                    <input className="sellerSignupInput" type="text" id="company" name="company"/>
                </div>
                <div className="rowItem">
                    <p className="sellerSignupHeaderText">
                        Branch Name 
                    </p>
                    <input className="sellerSignupInput" type="text" id="branch" name="branch"/>
                </div>
            </div>
            <div className="sellerSignupBody">
                <div className="rowItem">
                    <p className="sellerSignupHeaderText">
                        Branch Address 
                    </p>
                    <input className="sellerSignupInput" type="text" id="address" name="address"/>
                </div>
                <div className="rowItem">
                    <p className="sellerSignupHeaderText">
                        Branch Location 
                    </p>
                    <input className="sellerSignupInput" type="text" id="location" name="location"/>
                </div>
            </div>
            <button class="button">
                <span class="buttonText" onClick={handleSubmit}>Submit</span>
            </button>
        </view> 
    );
}

export default SellerSignup;