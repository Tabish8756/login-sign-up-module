const mongoose = require("mongoose");

const ConnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tabish8756:L7C3pbRTIw2JvVPA@login-sign-up-module.7yuyxfe.mongodb.net/",
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
