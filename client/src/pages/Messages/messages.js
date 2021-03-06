import React, { Component } from "react";
import API from "../../utils/API";
import AdminNav from "../../components/AdminNav";
import { Redirect } from 'react-router';
import "./messages.css";

class Messages extends Component {
	state = {
		unreadMessages:[],
		readMessages: []
	};

	componentDidMount(){
    	this.unRead();
    	this.read();
    };

    unRead = () => {
    	API.unreadMessages(false)
		.then(res => this.setState({unreadMessages: res.data})).then(() => console.log(this.state.unreadMessages))
		.catch(err => console.log(err));
    };

    read = () =>{
    	API.readMessages(true)
    	.then(res => this.setState({readMessages: res.data})).then(() => console.log(this.state.readMessages))
		.catch(err => console.log(err));
	};

	markReadMessage = id =>{
		API.markRead(id)
		.then(res => console.log(res))
		.then(() => this.unRead())
		.then(() => this.read())
		.catch(err => console.log(err));
	};

	markUnreadMessage = id => {
		API.unread(id)
		.then(res => console.log(res))
		.then(() => this.unRead())
		.then(() => this.read())
		.catch(err => console.log(err));
	};

	deleteMessage = id => {
		API.deleteMessage(id)
		.then(res => console.log(res))
		.then(() => this.unRead())
		.then(() => this.read())
		.catch(err => console.log(err));
	};

	
	render() {
		const unRead = this.state.unreadMessages.map((message, index) =>
			<div className="panel-group">
			  <div className="panel panel-default">
			    <div className="panel-heading">
			      
			    	<h2><span>{index +1}. </span>{message.firstName} {message.lastName}</h2>
			        <h4><span>Email: </span>{message.email}</h4>
			        <h4><span>Phone Number: </span>{message.phoneNumber}</h4>
			        <div className="buttons">
			        <button type="button" className="btn btn-success messageButton" onClick={() => this.markReadMessage(message._id)}>Mark Read</button>
			        <button type="button" className="btn btn-danger messageButton" onClick= {() => this.deleteMessage(message._id)}>Delete</button>
			        </div>
			      
			    </div>
			  </div>
			  <div className="panel panel-default">
			    <div className="panel-body">
			    	<p><span>Message:  </span>{message.message}</p>
			    	<p><span>Message Received:  </span>{message.messageRecieved}</p>
			    </div>
			  </div>
			</div>
			);

		const read = this.state.readMessages.map((message, index) =>
			<div className="panel-group">
			  <div className="panel panel-default">
			    <div className="panel-heading">
			      
			    	<h2><span>{index +1}. </span>{message.firstName} {message.lastName}</h2>
			        <h4><span>Email: </span>{message.email}</h4>
			        <h4><span>Phone Number: </span>{message.phoneNumber}</h4>
			        <div className="buttons">
			        <button type="button" className="btn btn-success messageButton" onClick={() => this.markUnreadMessage(message._id)}>Mark Unread</button>
			        <button type="button" className="btn btn-danger messageButton" onClick= {() => this.deleteMessage(message._id)}>Delete</button>
			        </div>
			      
			    </div>
			  </div>
			  <div className="panel panel-default">
			    <div className="panel-body">
			    	<p><span>Message:  </span>{message.message}</p>
			    	<p><span>Message Received:  </span>{message.messageRecieved}</p>
			    </div>
			  </div>
			</div>
			)
		return(<div>
			
			<AdminNav />
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h1 className="text-center">Unread Messages</h1>
						<div>{unRead}</div>
					</div>
					<div className="col-md-6">
						<h1 className="text-center">Read Messages</h1>
						<div>{read}</div>
					</div>
				</div>
			</div>
		</div>)
	}
}

export default Messages;