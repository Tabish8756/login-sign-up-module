const Joi = require("joi");

const OtpValidation = Joi.object({
    mobile_no:Joi.string().length(10).pattern(/[6-9]{1}[0-9]{9}/).required(),
    otp_code:Joi.number().required()
})

module.exports = OtpValidation;