import React from 'react'

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Mainpage from './components/Mainpage';
import Location from './components/Location';
import Prices from './components/Prices';
import './App.css';

function App() {
  return (
    <Router className='background'>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Mainpage/>
            </Route>
            <Route exact path='/location'>
              <Location/>
            </Route>
            <Route exact path='/prices'>
              <Prices/>
            </Route> 
          </Switch>  
        </div>  
    </Router>
  );
}

export default App;