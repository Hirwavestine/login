const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },

  password: {
    type: String,
    required: true,
    minlength: 5
  }
});
//use our Mongo's model that is going to be created called users and I want to pass in user schema
module.exports = mongoose.model("users", UserSchema);
