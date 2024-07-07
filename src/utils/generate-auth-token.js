const jwt = require("jsonwebtoken");

const generateAuthToken = async (userData) => {
    const JWT_SECRET = "9dH39!vD*Qws6^zF%yKb7@cT"
   const payload = {
      userData,
   }
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: "1h",
    });

    return token;
}

module.exports = generateAuthToken;