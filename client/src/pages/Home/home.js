import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import NavBar from "../../components/NavBar";
import "./home.css";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel"



class Home extends Component{
	state ={}
	


render(){
				
	return(
		<div>
		<div className="container">
			<div className="row">
				<div className="col-md-1"></div>
				<div className = "col-md-10">
					<Carousel />
				</div>
				<div className="col-md-1"></div>
			</div>
		</div>
		



		
		
		
		</div>
		);
};
};

export default Home;