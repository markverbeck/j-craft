import axios from "axios";




export default {

	createMessage: function(messageData){
		return axios.post("/api/jcraft", messageData);
	},

	signUp: function(signUpData){
		return axios.post("/api/jcraft/admin/signup", signUpData);
	},

	loggedIn: function(logInData){
		return axios.get("/api/jcraft/user/" + logInData);
	},

	signOut: function(logOutData){
		return axios.put("/api/jcraft/user/signout", logOutData);
	},

	logIn: function(logInData){
		return axios.put("/api/jcraft/user/login", logInData);
	},

	unreadMessages: function(unreadMessagesData){
		return axios.get("/api/jcraft/user/unreadmessages/" + unreadMessagesData);
	},

	readMessages: function(readMessageData){
		return axios.get("/api/jcraft/user/readmessages/" + readMessageData);
	},

	markRead: function(markReadData){
		return axios.put("/api/jcraft/user/" + markReadData);
	},

	unread: function(unreadData){
		return axios.put("/api/jcraft/user/markunread/" + unreadData);
	},

	deleteMessage: function(deleteData){
		return axios.delete("/api/jcraft/user/deletemessage/" + deleteData);
	},

	// loggedIn: function(logInData){
	// 	return axios.get("api/scores/user/" + logInData);
	// },
	// logIn: function(logInData){
	// 	return axios.put("api/scores/user/login", logInData);
	// },
	// logOut: function(logOutData){
	// 	return axios.put("api/scores/user/logout", logOutData);
	// },
	// save: function(articleData){
	// 	return axios.post("/api/scores", articleData);
	// },
	// searchScore: function(first, last){
	// 	return axios.get("/api/scores/" + first + "/" + last);
	// },
	// delete: function(id){
	// 	return axios.delete("/api/scores/" + id);
	// },

}