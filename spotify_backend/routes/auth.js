const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
// import usermodel from '../../models/user';
const user=require('../models/user.js');
const gettoken = require('../utils/helper.js');
require('dotenv').config();
router.post('/register',async(req,res)=>{
    //1.acccept with the help of req.body;
    const {email,password,firstname,lastname,username}=req.body;
    //2.check user exist or not;
    const user_first=await user.findOne({email:email});
    if(user_first){
        return res.status(403).json({error:"a user with this email is already exists"});
    }
    //3.create a new user;
    const hashedpassword=bcrypt.hash(password,10)
    const newuserdata={email,password:hashedpassword,firstname,lastname,username};
    const newuser=await user.create(newuserdata);
   // 4.we want to create token
   const token=gettoken(email,newuser);
   //5.return the token;
   const usertoreturn={...newuser.toJson(),token};
   delete usertoreturn.password;
    return res.status(200).json(usertoreturn);
})
module.exports=router;
