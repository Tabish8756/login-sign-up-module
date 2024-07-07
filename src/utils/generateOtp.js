const generateOtp = () => {
  const optLength = 4;
  let otp = "";
  for (let i = 0; i < optLength; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return{
     status:true,
     otp:parseInt(otp, 10)
  }
};

module.exports = generateOtp;
