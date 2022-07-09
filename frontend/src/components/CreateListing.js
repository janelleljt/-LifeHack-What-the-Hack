import React from 'react'
import '../css/CreateListing.css';
import Navbar from './Navbar';

function CreateListing() {
  return (
    <div>
        <Navbar/>
      <div className='createList'>
          <div>
              <h1 className='ListTitle'>Create Produce Listing</h1>
          </div>

          <div className='createBody'>
              <p className="createListingtext">Listing Name: </p>
              <input className="createListingInput" type="name" id="name" name="name" required minlength="4"/>

              <p className="createListingtext">Listing Description: </p>
              <input className="createListingInput" type="description" id="description" name="description" required minlength="10"/>

              <p className="createListingtext">Listing Price: </p>
              <input className="createListingInput" type="price" id="price" name="price" required minlength="1"/>

              <p className="createListingtext">Listing Image: </p>
              <input className="listingImage" type="file" id="img" name="img" accept="image/*"/>
          </div>

          <div>
            <button class="button">
                  <span class="buttonText">Create Listing</span>
                  <i class="ri-check-line icon"></i>
            </button>
          </div>
      </div>
    </div>
  )
}

export default CreateListing