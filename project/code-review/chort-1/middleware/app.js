const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const app = express();
app.use(express.json());
const AllUsers = [
  {
    username: "vineetha@gmail.com",
    password: 123,
    name: "vineetha",
  },
  {
    username: "aman@gmail.com",
    password: 123,
    name: "aman",
  },
];

function userExists(username, password) {
  let userExists = false;
  for (let i = 0; i < AllUsers.length; i++) {
    if (AllUsers[i].username == username && AllUsers[i].password == password) {
      userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;
  res.json({
    users: AllUsers.filter(function (value) {
      if (value.username == username) {
        return false;
      } else {
        return true;
      }
    }),
  });
});

app.listen(4000, () => console.log("server 4000"));
