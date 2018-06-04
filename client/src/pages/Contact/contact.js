import React, { Component } from "react";
// import { Link } from "react-router-dom";
import API from "../../utils/API";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import "./contact.css";
import JcraftLogo from "../../files/j-craft-logo.png";

const moment = require('moment');


class Contact extends Component {
	state ={
		firstName: "",
		lastName: "",
		email: "",
		telephone: "",
		message: "",
		thanks: "",
		animateClass: "",
		logoClass: ""
	}

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
     
    };

    handleFormSubmit = event => {
    	event.preventDefault();
    	API.createMessage({
    		firstName: this.state.firstName,
    		lastName: this.state.lastName,
    		email: this.state.email,
    		phoneNumber: this.state.telephone,
    		message: this.state.message,
    		messageRecieved: moment().format('MMMM Do YYYY, h:mm:ss a')
    	})
	    	.then(res => this.setState({thanks: "Thank yor for contacting us!", animateClass:"thanksDiv animated fadeInDown", logoClass: "animated fadeOutDown"}))
	        .catch(err => console.log(err));

	        this.setState({firstName: "", lastName: "", email: "", telephone: "", message: ""});
    };

    

	render(){
		return(
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<NavBar />
							
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<form>
							  <div className="form-group">
							    <label for="firstName">First Name:</label>
							    <input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="required" type="text" className="form-control" id="firstName"></input>
							  </div>

							  <div className="form-group">
							    <label for="lastName">Last Name:</label>
							    <input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="required" type="text" className="form-control" id="lastName"></input>
							  </div>

							  <div className="form-group">
							    <label for="email">Email address:</label>
							    <input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="required" type="email" className="form-control" id="email"></input>
							  </div>
							  <div className="form-group">
							    <label for="telephone">Telephone Number:</label>
							    <input value={this.state.telephone} onChange={this.handleInputChange} name="telephone" placeholder="optional (xxx)-xxx-xxxx" type="tel" className="form-control" id="telephone"></input>
							  </div>

							  <div className="form-group">
							    <label for="message">Message:</label>
							    <textarea value={this.state.message} onChange={this.handleInputChange} name="message" type="text" className="form-control" rows="5" id="message"></textarea>
							  </div>
							 
							  <button disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.message)} onClick={this.handleFormSubmit} type="submit" className="btn btn-default">Submit</button>
							</form>
						</div>

						<div className="col-md-6">

							<div id="thanksDiv" className={this.state.animateClass}>
								<h1 className="thanks">{this.state.thanks}</h1>
							</div>
							
							<div id="logoDivContact" className={this.state.logoClass}>
								
								<img src={JcraftLogo} className="img-responsive logoContact"></img>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<Footer />
						</div>
					</div>
				</div>
			</div>
			);
	}
};

export default Contact;