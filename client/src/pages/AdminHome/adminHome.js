import React, { Component } from "react";
import API from "../../utils/API";
import AdminNav from "../../components/AdminNav";



class AdminHome extends Component {
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

	

	render(){
		if(this.state.loggedIn === true){
		return(
			<div >
				<AdminNav />

				<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h1>Welcome to Admin Page {this.state.userName}</h1>
							<h2>Please choose an action above!</h2>
						</div>
					</div>
				</div>
			</div>
			)
		}else{
			return(
				<div>
					<AdminNav />
					<div className="container">
					<div className="row">
						<div className="col-md-12 text-center">
							<h1>Please <a href="/admin/login">Login</a> or <a href="/admin/security">Signup</a>.</h1>
						</div>
					</div>
				</div>
				</div>
				)
		}
	}

}

export default AdminHome;