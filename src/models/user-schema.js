const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    mobile_no:{
        type:String,
        required:true,
        unique:true
    },
    user_name:{
        type:String,
        required:true,
    },
    date_of_birth:{
        type:Date
    },
    address:{
        type:String
    },
    mPin:{
        type:Number
    },
    created_date:{
        type:Date,
        default:Date.now
    },
    last_modified_date:{
        type:Date,
        default:Date.now
    }
});

UserSchema.pre('save',function(next){
    this.last_modified_date = new Date();
    next();
})

const UserData = mongoose.model('UserData', UserSchema);
module.exports = UserData