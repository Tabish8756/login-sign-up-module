const UserData = require("../../models/user-schema")

const findUser = async (userMobileNo) => {
   const userExist = await UserData.findOne({
      mobile_no:userMobileNo
   })
   console.log('user exist', userExist)
   if(userExist !== null){
      return true;
   }
   else{
      return false;
   }
}

module.exports = findUser