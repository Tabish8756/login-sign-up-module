const UserData = require("../../models/user-schema")

const findUser = async (userMobileNo) => {
   const userExist = await UserData.findOne({
      mobile_no:userMobileNo
   })
   if(userExist !== null){
      return{
         status:true,
         userData:userExist
      };
   }
   else{
      return{
          status:false
      }
   }
}

module.exports = findUser