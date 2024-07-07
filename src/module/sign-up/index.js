const generateOtp = require("../../utils/generateOtp");
const addNewUser = require("../../utils/queries/add-user-details");
const findUser = require("../../utils/queries/user-exist");
const UserSignUpValidation = require("../../validations/user-sign-up-validation");

const UserSignUp = async (req) => {
  const { mobile_no, user_name } = req.body;
  try {
    const { error } = UserSignUpValidation.validate({ mobile_no, user_name });
    if (error) {
      return {
        status: 400,
        message: error.message,
      };
    } else {
      const userDetails = await findUser(mobile_no);
      if (userDetails?.status) {
        return {
          status: 409,
          message: "User already exist",
        };
      } else {
        const otpGeneration = generateOtp(); 
        if (otpGeneration?.status) {
          const addUser = await addNewUser({
            mobile_no,
            user_name,
            otp_code: otpGeneration.otp,
          });
          if (addUser?.status === 201) {
            return {
              status: 201,
              message: "User details added successfully",
            };
          }
        }
      }
    }
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };
  }
};

module.exports = UserSignUp;
