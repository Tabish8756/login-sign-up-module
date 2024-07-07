const generateAuthToken = require("../../utils/generate-auth-token");
const { updateUserVerification } = require("../../utils/queries/update-user-details");
const findUser = require("../../utils/queries/user-exist");
const OtpValidation = require("../../validations/otp-verify-validation");

const verifyOtp = async (req) => {
  const currentTimestamp = new Date(Date.now());
  const { mobile_no, otp_code } = req.body;
  try {
    const { error } = OtpValidation.validate({ mobile_no, otp_code });
    if (error) {
      return {
        status: 400,
        message: error.message,
      };
    } else {
      const userDetails = await findUser(mobile_no);
      if (userDetails?.status) {
        if (userDetails?.userData?.otp_expiration > currentTimestamp) {
          if (userDetails?.userData?.otp_code === otp_code) {
            const AuthToken = await generateAuthToken(userDetails?.userData);
            return {
              status: 200,
              authToken: AuthToken,
              message: "Otp verified successfully",
            };
          } else {
            return {
              status: 401,
              message: "Invalid Otp",
            };
          }
        } 
        else {
          return {
            status: 401,
            message: "Otp expired",
          };
        }
      } else {
        return {
          status: 400,
          message: "User not found or already verified",
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

module.exports = verifyOtp;
