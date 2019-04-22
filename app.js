const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongod://127.0.0.1/LOGIN", { useNewUrlParser: true }, () => {
  console.log("connected");
});

app.listen(4111, () => {
  console.log("Our app listen on port 411");
});
