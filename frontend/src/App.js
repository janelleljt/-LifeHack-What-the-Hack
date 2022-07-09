import React from 'react'

import './App.css'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <Router className='background'>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Mainpage/>
            </Route>
            <Route path='/joingame'>
              
            </Route>
            <Route exact path='/entername'>
              
            </Route>   
            <Route exact path='/entergamecode'>
              
            </Route>
          </Switch>  
        </div>
    </Router>
  );
}

export default App;