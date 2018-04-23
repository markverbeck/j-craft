import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";



class About extends Component {
	render(){
		return(
			<div>
				<NavBar />
				<h1>About Page</h1>
			</div>
			);
	}
};

export default About;