import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SellerSignup from './components/SellerSignup';

function App() {
  return (
    <Router className='background'>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              
            </Route>
            <Route path='/sellersignup'>
              <SellerSignup/>
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