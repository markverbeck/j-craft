import React, { Component } from "react";
import API from "../../utils/API";
import "./navBar.css";
import JcraftLogo from "../../files/j-craft-logo.png";


class NavBar extends Component {

	render(){
		return(
			<div>
			<nav className="navbar navbar-inverse">
			  <div className="container-fluid">
			    <div className="navbar-header">

			    <button id="dropButton" type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>                        
			    </button>
			      <img id="navLogo" className="img-responsive" src={JcraftLogo}></img>
			    </div>
			    <ul className="nav navbar-nav navbar-right navbar-collapse collapse" id="myNavbar">
			      <li><a href="/">Home</a></li>
			      <li><a href="/about">About</a></li>
			      <li><a href="/shop">Shop</a></li>
			      <li><a href="/contact">Contact</a></li>
			    </ul> 
			  </div>
			</nav>
			</div>
			)
	}
}



export default NavBar;