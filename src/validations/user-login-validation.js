const Joi = require("joi")

const UserLoginValidation = Joi.object({
    mobile_no:Joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
}) 

module.exports = UserLoginValidation