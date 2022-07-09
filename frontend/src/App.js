import React from 'react'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import ProductInfoPage from './components/ProductInfoPage';
import Location from './components/Location';
import Prices from './components/Prices';
import ProductListing from './components/ProductListing';
import './App.css';
<<<<<<< HEAD
import CreateListing from './components/CreateListing';
=======
import SellerSignup from './components/SellerSignup';
import CompanyListings from './components/CompanyListings';

>>>>>>> 63dd1ae00aeaf3fffc0539d35b298f8850bcc888

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
<<<<<<< HEAD
            <Route exact path='/createlisting'>
              <CreateListing/>
            </Route> 
=======
            <Route exact path='/listing'>
              <ProductListing/>
            </Route>
            <Route exact path='/sellersignup'>
              <SellerSignup/>
            </Route> 
            <Route exact path='/companylisting'>
              <CompanyListings/>
            </Route>
>>>>>>> 63dd1ae00aeaf3fffc0539d35b298f8850bcc888
          </Switch>  
        </div>  
    </Router>
  );
}

export default App;