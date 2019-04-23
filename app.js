const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongod://127.0.0.1/LOGIN", { useNewUrlParser: true }, () => {
  console.log("connected");
});
app.post("/register", (req, res) => {
  const newUser = new User();
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  res.send(newUser);
});

app.listen(4111, () => {
  console.log("Our app listen on port 4111");
});
