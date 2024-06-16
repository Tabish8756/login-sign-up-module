const Joi = require("joi");

const UserSignUpValidation = Joi.object({
    mobile_no:Joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    user_name:Joi.string().pattern(/^[a-zA-Z0-9]*$/).required()
})

module.exports = UserSignUpValidation