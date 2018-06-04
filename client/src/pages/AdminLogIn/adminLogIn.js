import React, { Component } from "react";
import API from "../../utils/API";
import AdminNav from "../../components/AdminNav";
import { Redirect } from 'react-router';

class AdminLogIn extends Component {
    state={
   		userName:"",
   		password:"",
   		loggedIn:false,
   		logUser:"",
   		logPass:"",
   		incorrect:""
    };

    handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
	};

	handleFormSubmit = event => {
    event.preventDefault();
    let noMatch;
    if (this.state.userName && this.state.password) {
      API.logIn({
        userName: this.state.userName,
        password: this.state.password
      })
        .then(res => {
        	if(!res.data){
        		this.setState({userName: "", password: ""})


        		return;
        	}else{
        	this.setState({logUser: res.data.userName, logPass: res.data.password})
        }
        })
        .then(() => this.correctUser())
        .catch(err => console.log(err));
        
        
    	}
	};

	isValidUser = () => {
		return this.state.userName.length > 0 &&
		this.state.password.length > 0 &&
		this.state.logUser.length > 0 &&
		this.state.logPass.length > 0 &&
		this.state.userName === this.state.logUser &&
		this.state.password === this.state.logPass;
	};

	correctUser = () => {
		if(this.isValidUser()){
			this.setState({loggedIn: true});
		}else{
			this.setState({incorrect: "Sorry that is a invalid username and password!"});
		}

	};
	  render(){
	
  	if(!this.state.loggedIn){
		return(<div>
				<AdminNav />
				<div className="container">
					<div className="row">
						<div className="col-md-4"></div>
						<div className="col-md-4">
							<h2>{this.state.incorrect}</h2>
							<form action="/action_page.php">
							  <div className="form-group">
							    <label for="userName">User Name:</label>
							    <input value={this.state.userName} onChange={this.handleInputChange} name="userName" type="text" className="form-control" id="userName"></input>
							  </div>
							  <div className="form-group">
							    <label for="password">Password:</label>
							    <input value={this.state.password} onChange={this.handleInputChange} name="password" type="password" className="form-control" id="pwd"></input>
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

  export default AdminLogIn;
