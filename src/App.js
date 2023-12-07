import logo from './logo.svg';
import './App.css';
//import React, { useState } from "react";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './pages/About';
import Resume from './pages/resume';
import Footer from './components/footer';
import { HashRouter as Router } from 'react-router-dom'


// userstate setMenuSelected and assign colour to that state when true 

//library.add(fab, faCheckSquare, faCoffee)

const App = () => {
  return (
  <div className="App">
<Router>
<Navbar></Navbar>
<Route exact path='/' component={AboutMe} />
<div>
      <Switch>
        
          <Route exact path='/about' component={AboutMe} />
    
          <Route exact path='/resume' component={Resume} />
      
      </Switch>
      </div>
      </Router>
      <Footer></Footer>
    </div>

  );
}

export default App;
