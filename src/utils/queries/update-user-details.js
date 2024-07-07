const UserData = require("../../models/user-schema")

const updateUserVerification = async (mobile_no) => {
     try{
    const response = await UserData.updateOne({mobile_no:mobile_no}, {is_verified:true})
      if(response?.modifiedCount === 1){
        return{
            status:true,
        }
      }
      else{
        return{
            status:false
        }
      }
     }
     catch(err){
         return {
            status:500,
             message:err.message
         }
     }
}

const updateUserOtp = async (mobile_no, otp_code) => {
  console.log("updating");
  try {
    const response = await UserData.updateOne(
      { mobile_no: mobile_no },
      {
        otp_code: otp_code,
        otp_expiration: new Date(Date.now() + 30 * 1000),
      }
    );
    console.log("response", response);
    if (response?.modifiedCount === 1) {
      return {
        status: true,
        message: "OTP updated successfully",
      };
    } else {
      return {
        status: false,
        message: "Failed to update OTP",
      };
    }
  } catch (err) {
    return {
      status: 500,
      message: err.message,
    };
  }
};

module.exports = {updateUserVerification, updateUserOtp}