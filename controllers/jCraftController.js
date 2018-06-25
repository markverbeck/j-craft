const db = require("../models");


module.exports = {

  create: function(req, res) {
    db.Messages
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  signUp: function(req, res) {
    db.SignIn
      .create(req.body)
      .then(dbModel => {console.log(dbModel); return res.json(dbModel)})
      .catch(err => res.status(422).json(err));
  },

  loggedIn: function(req, res){
    db.SignIn
      .find({loggedin: req.params.loggedIn})
      .then(dbModel => { console.log(dbModel); return res.json(dbModel);})
      .catch(err => res.status(422).json(err));
  },

  signOut: function(req, res){
    const query = {userName: req.body.userName, password: req.body.password};
    db.SignIn
    .findOneAndUpdate(query, {loggedin: false})
    .then(dbModel=> res.json(dbModel))
    .catch(err=> res.status(422).json(err));

  },

  logIn: function(req, res){
  	const query = {userName: req.body.userName, password: req.body.password};
  	db.SignIn
  	.findOneAndUpdate(query, {loggedin: true})
  	.then(dbModel=> res.json(dbModel))
  	.catch(err=> res.status(422).json(err));
  },

  unreadMessages: function(req, res){
  	db.Messages
      .find({messageRead: req.params.messageread})
      .then(dbModel => {console.log(dbModel); return res.json(dbModel);})
      .catch(err => res.status(422).json(err));
  },

  readMessages: function(req, res) {
  	db.Messages
  	  .find({messageRead: req.params.messageread})
  	  .then(dbModel => {console.log(dbModel); return res.json(dbModel);})
      .catch(err => res.status(422).json(err));
  },

  markRead: function(req, res) {
  	const query = {_id: req.params.markread};
  	db.Messages
  	  .findOneAndUpdate(query, {messageRead: true})
  	  .then(dbModel=> res.json(dbModel))
  	  .catch(err=> res.status(422).json(err));
  },

 
  unread: function(req, res) {
  	const query = {_id: req.params.unread};
  	db.Messages
  	  .findOneAndUpdate(query, {messageRead: false})
  	  .then(dbModel=> res.json(dbModel))
  	  .catch(err=> res.status(422).json(err));
  },

  deleteMessage: function(req, res) {
  	db.Messages
  	  .deleteOne({_id: req.params.deletemessage})
  	  .then(dbModel => res.json(dbModel))
  	  .catch(err => res.status(422).json(err));
  }

  

}