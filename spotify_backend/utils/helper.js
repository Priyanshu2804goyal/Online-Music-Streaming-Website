const jwt=require("jsonwebtoken");
require('dotenv').config();
exports={};
exports.gettoken=async(email,user)=>{
   const token=jwt.sign({identifier:user._id},process.env.secret_key);
   return token
}
module.exports=exports;