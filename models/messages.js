const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require('moment');

const messagesSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: String,
  message: { type: String, required: true },
  messageRecieved: { type: String, default: moment().format('MMMM Do YYYY, h:mm:ss a')}

 
});

const Messages = mongoose.model("Messages", messagesSchema);

module.exports = Messages;