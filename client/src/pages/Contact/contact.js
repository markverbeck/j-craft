import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";



class Contact extends Component {
	render(){
		return(
			<div>
				<NavBar />
				<h1>Contact Page</h1>
			</div>
			);
	}
};

export default Contact;