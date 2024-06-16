const route = require("express").Router();
const UserLogin = require("../module/login/index");
const UserSignUp = require("../module/sign-up/index");

route.post("/login", (req, res) => {
  const user = UserLogin(req);
  console.log('user', user)
  res.status(user.status).send(user)
});

route.post("/sign-up", (req, res)=>{
    const user = UserSignUp(req)
    res.status(user.status).send(user)
})

module.exports = route;
