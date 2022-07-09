import React from 'react'
import Navbar from './Navbar'
import '../css/Login.css';

function Login() {
  return (
    <div>
        <Navbar/>
      <div className='login'>
          <div>
              <h1 className='LoginTitle'>Login</h1>
          </div>

          <div className='loginBody'>
              <p className="logintext">Username </p>
              <input className="logininput" type="name" id="name" name="name" required minlength="4"/>

              <p className="logintext">Password </p>
              <input className="logininput" type="description" id="description" name="description"/>
          </div>

          <div>
            <button class="loginbutton">
                  <span class="buttonText">Login</span>
                  <i class="ri-check-line icon"></i>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Login