const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://aman0024:%3CAman123%3E@cluster0.mrwjnch.mongodb.net/"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Aman yadav",
  email: "aman@gmail.com",
  password: "1234",
});
user.save();

app.listen(5000);
