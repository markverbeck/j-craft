import React, { Component } from 'react';
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import AdminHome from "./pages/AdminHome";
import AdminSignUp from "./pages/AdminSignUp";
import AdminLogOut from "./pages/AdminLogOut";
import AdminLogIn from "./pages/AdminLogIn";

const App = () => 
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/admin" component={AdminHome} />
      <Route exact path="/admin/signup" component={AdminSignUp} />
      <Route exact path="/admin/login" component={AdminLogIn} />
    </Switch>
  </Router>


export default App;
 