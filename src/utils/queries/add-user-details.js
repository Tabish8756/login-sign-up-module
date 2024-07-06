const UserData = require("../../models/user-schema")

const addNewUser = (userData) => {
    const {mobile_no, user_name} = userData
    const newUser = new UserData({
        mobile_no,
        user_name,
        created_date :  new Date()
    })
    newUser.save((err)=>{
        if(err){
            return {
               message:err.message
            }
        }
        else{
            return {
                status:201,
                message:"User created succesfully"
            }
        }
    })

    return newUser;
    
}

module.exports = addNewUser