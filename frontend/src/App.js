import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router className='background'>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              
            </Route>
            <Route path='/joingame'>
              
            </Route>
            <Route exact path='/entername'>
              
            </Route>   
            <Route exact path='/entergamecode'>
              
            </Route>
          </Switch>  
        </div>
        <h4>hellow workd</h4>      
    </Router>
  );
}

export default App;