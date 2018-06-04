import React, { Component } from "react";
import API from "../../utils/API";
import "./adminNav.css";

class AdminNav extends Component {
	state = {
		loggedIn:"",
		userName:"",
		password:""
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
  		}


  render(){

  	if(this.state.loggedIn === true){
    return(
      	<div>
      		<div className="container">
			  <div className="jumbotron text-center">
			    <h1>J-Craft Admin Page</h1>
			    <h2>Welcome {this.state.userName}!</h2>
			    <a href="#">Messages   </a>
			    <a href="#"> Inventory   </a>
			    <a href="#"> Add Inv   </a>
			    <a href="#"> Manage Inv  </a>
			    <a href="#" onClick={this.signOut}> Log Out</a>
			  </div>
			</div>
      	</div>
      )
	}else{
		return(
			<div>
	      		<div className="container">
				  <div className="jumbotron text-center">
				    <h1>J-Craft Admin Page</h1>
				    <a href="#">Messages   </a>
				    <a href="#"> Inventory   </a>
				    <a href="#"> Add Inv   </a>
				    <a href="#"> Manage Inv   </a>
				    <a href="/admin/login"> LogIn   </a>
				    <a href="/admin/signup"> SignUp</a>
				  </div>
				</div>
	      	</div>
			)
	}
  }
}

export default AdminNav;