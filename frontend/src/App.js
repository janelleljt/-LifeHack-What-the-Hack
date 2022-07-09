import React from 'react'

import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import ProductInfoPage from './components/ProductInfoPage';

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
          </Switch>  
        </div>
    </Router>
  );
}

export default App;