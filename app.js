const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb://127.0.0.1/LOGIN", { useNewUrlParser: true }, () => {
  console.log("connected");
});
//create a register route
app.post("/register", (req, res) => {
  const newUser = new User();
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  //save newUser
  newUser
    .save()
    .then(userSaved => {
      res.send("USER SAVED");
    })
    .catch(err => {
      res.send("User was not saved because ...." + err);
    });
});
app.listen(4111, () => {
  console.log("listening on port 4111");
});
