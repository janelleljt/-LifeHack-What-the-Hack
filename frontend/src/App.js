import React from 'react'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import ProductInfoPage from './components/ProductInfoPage';
import Location from './components/Location';
import Prices from './components/Prices';
import './App.css';
import CreateListing from './components/CreateListing';

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
            <Route exact path='/createlisting'>
              <CreateListing/>
            </Route> 
          </Switch>  
        </div>  
    </Router>
  );
}

export default App;