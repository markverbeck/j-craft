import React, { Component } from "react";
import API from "../../utils/API";
import "./adminNav.css";
import { Redirect } from 'react-router';

class AdminNav extends Component {
	state = {
		loggedIn:false,
		userName:"",
		password:"",
		
	}

	componentDidMount() {
		API.loggedIn(true)
		.then(res => this.setState({
			loggedIn: res.data[0].loggedin,
			userName: res.data[0].userName,
			password: res.data[0].password
		}))
		.catch(err => console.log(err));

	};

	signOut = () =>{
		API.signOut({
			userName: this.state.userName,
			password: this.state.password
		})
		.then(() => this.reload())
		.catch(err => console.log(err));
	};

	reload = () =>{
  		this.setState({loggedIn: false});
  		window.location.reload();
  		}


  render(){

  	if(this.state.loggedIn === true){
    return(
      	<div>
      		<div className="container">
			  <div className="jumbotron text-center">
			    <h1>J-Craft Admin Page</h1>
			    <h2>Welcome {this.state.userName}!</h2>
			    <a href="/admin/messages">Messages   </a>
			    <a href="#"> Inventory   </a>
			    <a href="/admin/addinv"> Add Inv   </a>
			    <a href="#"> Manage Inv  </a>
			    <a href="#" onClick={this.signOut}> Log Out</a>
			  </div>
			</div>
      	</div>
      )
	}else if (this.state.loggedIn === false){
		return(
			<div>
	      		<div className="container">
				  <div className="jumbotron text-center">
				    <h1>J-Craft Admin Page</h1>
				    <a href="/admin/login"> LogIn   </a>
				    <a href="/admin/security"> SignUp</a>
				  </div>
				</div>
			</div>
			)
	}
  }
}

export default AdminNav;