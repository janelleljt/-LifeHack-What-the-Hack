import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import JoinGame from './components/JoinGame';
import EnterName from './components/EnterName';
import EnterGameCode from './components/EnterGameCode';

function App() {
  return (
    <Router className='background'>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/joingame'>
              <JoinGame />
            </Route>
            <Route exact path='/entername'>
              <EnterName />
            </Route>   
            <Route exact path='/entergamecode'>
              <EnterGameCode />
            </Route>
          </Switch>  
        </div>      
    </Router>
  );
}

export default App;