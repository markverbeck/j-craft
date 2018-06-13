import React, { Component } from "react";
import API from "../../utils/API";
import AdminNav from "../../components/AdminNav";
import { Redirect } from 'react-router';


class SecurityQuestions extends Component {
	state = {
		answer1: "Balocco",
		answer2: "Sass",
		answer3: "Tyrone",
		answer4: "Mountie",
		answer5: "Leroy",
		response1: "",
		response2: "",
		response3: "",
		response4: "",
		response5: "",
		correct: false,
		message: ""
	};

	handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if(this.state.answer1 === this.state.response1 &&
			this.state.answer2 === this.state.response2 &&
			this.state.answer3 === this.state.response3 &&
			this.state.answer4 === this.state.response4 &&
			this.state.answer5 === this.state.response5){
			this.setState({correct: true});
		}else{
			this.setState({message: "Sorry, your answers were incorrect."});
		}
	};

	render() {
		if(!this.state.correct){
		return(<div>
				<AdminNav />
				<div className="container">
					<div className="row">
						<div className="col-md-4"></div>
						<div className="col-md-4">
							<h1 className="text-center">Please answer the following questions before proceeding</h1>
							<h1 className="text-center">{this.state.message}</h1>
							<form action="/action_page.php">
							  <div className="form-group">
							    <label for="response1">1. Mother's maiden name?</label>
							    <input value={this.state.response1} onChange={this.handleInputChange} name="response1" type="password" className="form-control" id="response1"></input>
							  </div>
							  <div className="form-group">
							    <label for="response2">2. First pet?</label>
							    <input value={this.state.response2} onChange={this.handleInputChange} name="response2" type="password" className="form-control" id="response2"></input>
							  </div>
							  <div className="form-group">
							    <label for="response3">3. Town you were born in?</label>
							    <input value={this.state.response3} onChange={this.handleInputChange} name="response3" type="password" className="form-control" id="response3"></input>
							  </div>
							  <div className="form-group">
							    <label for="response4">4. Highschool mascot?</label>
							    <input value={this.state.response4} onChange={this.handleInputChange} name="response4" type="password" className="form-control" id="response4"></input>
							  </div>
							  <div className="form-group">
							    <label for="response5">5. Nickname?</label>
							    <input value={this.state.response5} onChange={this.handleInputChange} name="response5" type="password" className="form-control" id="response5"></input>
							  </div>
							  
							  <button onClick={this.handleFormSubmit} className="btn btn-default">Submit</button>
							</form>
						</div>
						<div className="col-md-4"></div>
					</div>
				</div>
			</div>)
		}else{
			return(<Redirect to="/admin/signup/vk832vlpa57/noq60nraxi" />);
		}
	}
}

export default SecurityQuestions;