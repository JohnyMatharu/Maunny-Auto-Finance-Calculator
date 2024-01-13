import logo from './logo.svg';
import './App.css';
//import React, { useState } from "react";
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
import VehicleDetail from './pages/vehicleDetail';
import ShoppingCart from './pages/shoppingCart';
// import Counter1 from './pages/test1.js';
// import Counter2 from './pages/test2.js';
import Footer from './components/footer';
import { HashRouter as Router } from 'react-router-dom'
// import RecipeBox from './pages/test';




// userstate setMenuSelected and assign colour to that state when true 

//library.add(fab, faCheckSquare, faCoffee)

const App = () => {
  return (
  <div className="App">
<Router>
{/* <Navbar></Navbar> */}
<Route exact path='/' component={VehicleDetail} />
{/* <Route exact path='/' component={Counter1} /> */}
<div>
      <Switch>
        
          <Route exact path='/vehicleDetail' component={VehicleDetail} />
          {/* <Route exact path='/test1' component={Counter1} /> */}
      {/* <Route exact path='/test2' component={Counter2} /> */}
          <Route exact path='/shoppingCart' component={ShoppingCart} />
      
      </Switch>
      </div>
      </Router>
      <Footer></Footer>
    </div>

  );
}

export default App;


