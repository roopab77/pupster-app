import React from 'react';
//import react router dom
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Discover from './components/Discover/Discover';
import Search from './components/Search/Search';

const App = () => (
  
  
  <Router>
    <div>
    <Navbar />
      <Switch>
      <Route exact path = '/about' component = {About}/>
      <Route exact path = '/discover' component = {Discover}/>
      <Route exact path = '/search' component = {Search}/>
      <Route component={About}/>
      </Switch>
    </div>
    
  </Router>
);



export default App;
