const UserLoginValidation = require("../../validations/user-login-validation");

const UserLogin = (req) => {
  const { mobile_no, password } = req.body;
  try {
    const { error } = UserLoginValidation.validate({
      mobile_no,
      password,
    });
    if (error) {
      return {
        status:400,
        message: error.message,
      };
    } else {
        
    }
  } catch (err) {
    return {
        status:500,
        message:err.message
    }
  }
};

module.exports = UserLogin;
