import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//import components
import Home from './components/home/Home';
import Aerogms from './components/aerogms/Aerogms';
import Ropeway from './components/ropeway/Ropeway';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path= '/' component = {Home} />
          <Route exact path= '/aerogms' component = {Aerogms} />
          <Route path = '*' component = {Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
