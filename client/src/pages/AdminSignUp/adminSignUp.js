import React, { Component } from "react";
import API from "../../utils/API";
import AdminNav from "../../components/AdminNav";
import { Redirect } from 'react-router';


class AdminSignUp extends Component {
	state={
		firstName: "",
		lastName: "",
		userName: "",
		pwd: "",
		email: "",
		loggedIn: false
	};

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
	};

	handleFormSubmit = event => {
		event.preventDefault();
		API.signUp({
			firstName:this.state.firstName,
			lastName:this.state.lastName,
			email:this.state.email,
			userName:this.state.userName,
			password:this.state.pwd
		}).then(res => console.log("Thank you for signing up!"))
			.then(() => this.reload())
			.catch(err => console.log(err));

			this.setState({firstName:"", lastName:"", userName:"", pwd:"",email:""})
	};

	reload = () => {
  	this.setState({loggedIn:true});
  };

	render() {

		if(!this.state.loggedIn){
		return(<div>
				<AdminNav />
				<div className="container">
					<div className="row">
						<div className="col-md-4"></div>
						<div className="col-md-4">
							<form action="/action_page.php">
							  <div className="form-group">
							    <label for="firstName">First Name:</label>
							    <input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" type="text" className="form-control" id="firstName"></input>
							  </div>
							  <div className="form-group">
							    <label for="lastName">Last Name:</label>
							    <input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" type="text" className="form-control" id="lastName"></input>
							  </div>
							  <div className="form-group">
							    <label for="email">Email address:</label>
							    <input value={this.state.email} onChange={this.handleInputChange} name="email" type="email" className="form-control" id="email"></input>
							  </div>
							  <div className="form-group">
							    <label for="userName">User Name:</label>
							    <input value={this.state.userName} onChange={this.handleInputChange} name="userName" type="text" className="form-control" id="userName"></input>
							  </div>
							  <div className="form-group">
							    <label for="pwd">Password:</label>
							    <input value={this.state.pwd} onChange={this.handleInputChange} name="pwd" type="password" className="form-control" id="pwd"></input>
							  </div>
							  
							  <button onClick={this.handleFormSubmit} className="btn btn-default">Submit</button>
							</form>
						</div>
						<div className="col-md-4"></div>
					</div>
				</div>
			</div>)
		}else{
			return(<Redirect to="/admin" />);
		}
	}
	
}

export default AdminSignUp;