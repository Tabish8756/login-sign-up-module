const UserData = require("../../models/user-schema")

const addNewUser = async (userData) => {
    try{
    const {mobile_no, user_name, otp_code} = userData
    const newUser = new UserData({
        mobile_no,
        user_name,
        otp_code,
        otp_expiration:new Date(Date.now() + 30 * 1000),
        created_date :  new Date()
    })
    const response  = await newUser.save()
    return{
        status:201,
        message:"User added successfully",
        data:response
    }
}
    catch(err){
        return {
            message:err.message
        }
    }

    return newUser;
    
}

module.exports = addNewUser