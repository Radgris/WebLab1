import React from 'react';
import logo from './logo.svg';
import './App.css';

import Chihuahua from './Chihuahua';
import Juarez from './Juarez';
import Parral from './Parral';
import RouterTab from './RouterTab';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';



function App() {
  return (
    <div className="App-container">
    <div className='tab'>
      <Router>
        <Switch>
        <Route path="/" component={Chihuahua}></Route>
          <Route path="/Chihuahua" component={Chihuahua}></Route>
          <Route path="/Juarez" component={Juarez}></Route>
          <Route path="/Parral" component={Parral}></Route>
          
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
