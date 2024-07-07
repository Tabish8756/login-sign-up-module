const generateOtp = require("../../utils/generateOtp");
const { updateUserOtp } = require("../../utils/queries/update-user-details");
const findUser = require("../../utils/queries/user-exist");
const UserLoginValidation = require("../../validations/user-login-validation");

const UserLogin = async (req) => {
  const { mobile_no } = req.body;
  try {
    const { error } = UserLoginValidation.validate({
      mobile_no,
    });
    if (error) {
      return {
        status: 400,
        message: error.message,
      };
    } else {
      const userDetails = await findUser(mobile_no);
      if (userDetails?.status) {
        const otpGeneration = generateOtp();
        if (otpGeneration?.status) {
          const updateOtp = await updateUserOtp(mobile_no, otpGeneration.otp);
          if (updateOtp?.status) {
            return {
              status: 200,
              message: "OTP sent successfully",
            };
          } else {
            return {
              status: updateOtp.status,
              message: updateOtp.message,
            };
          }
        } else {
          return {
            status: 500,
            message: "Failed to send OTP",
          };
        }
      } else {
        return {
          status: 404,
          message: "User not found",
        };
      }
    }
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };
  }
};

module.exports = UserLogin;
