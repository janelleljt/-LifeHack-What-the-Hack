import React from 'react'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import ProductInfoPage from './components/ProductInfoPage';
import Location from './components/Location';
import Prices from './components/Prices';
import ProductListing from './components/ProductListing';
import './App.css';
import CreateListing from './components/CreateListing';
import SellerSignup from './components/SellerSignup';
import CompanyListings from './components/CompanyListings';
import Login from './components/Login';


function App() {
  return (
    <Router className='background'>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Mainpage/>
            </Route>
            <Route exact path='/info'>
              <ProductInfoPage/>
            </Route>
            <Route exact path='/location'>
              <Location/>
            </Route>
            <Route exact path='/prices'>
              <Prices/>
            </Route> 
            <Route exact path='/listing'>
              <ProductListing/>
            </Route>
            <Route exact path='/sellersignup'>
              <SellerSignup/>
            </Route> 
            <Route exact path='/companylisting'>
              <CompanyListings/>
            </Route>
            <Route exact path='/login'>
              <Login/>
            </Route>
            <Route exact path='/createlisting'>
              <CreateListing/>
            </Route>
          </Switch>  
        </div>  
    </Router>
  );
}

export default App;