const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/login-sign-module",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("db connected");
  } catch (err) {
    console.log("error", err);
  }
};

module.exports = ConnectDB;
