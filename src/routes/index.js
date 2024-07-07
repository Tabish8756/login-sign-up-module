const route = require("express").Router();
const UserLogin = require("../module/login/index");
const UserSignUp = require("../module/sign-up/index");
const verifyOtp = require("../module/verify-otp");

route.post("/login", async (req, res) => {
  const user = await UserLogin(req);
  res.status(user.status).send(user)
});

route.post("/sign-up", async (req, res)=>{
    const user = await UserSignUp(req)
    console.log('user', user)
    res.status(user.status).send(user)
})

route.post("/verify-otp", async (req, res)=>{
  const otpVerification = await verifyOtp(req)
  res.status(otpVerification.status).send(otpVerification)
})

module.exports = route;
