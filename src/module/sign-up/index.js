const UserSignUpValidation = require("../../validations/user-sign-up-validation")

const UserSignUp = (req) => {
    const {mobile_no, user_name} = req.body
    try{
       const {error} = UserSignUpValidation.validate({mobile_no, user_name})
       if(error){
        return {
            status:400,
            message:error.message
        }
       }
       else{
         return{
            status:200,
            message:"Sign up Sucessfull"
         }
       }
    }
    catch(err){
      return{
        status:500,
        message:err.message
      }
    }

}

module.exports = UserSignUp