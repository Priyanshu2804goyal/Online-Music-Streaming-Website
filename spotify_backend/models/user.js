const mongoose=require('mongoose');
const user=mongoose.Schema({
   firstname:{
    type:String,
    required:true,
   },
   lastname:{
    type: String,
    required:false,
   },
  email:{
    type:String,
    required:true,
  },
  username:{
    type:String,
    required:true,
  },
  likedsongs:{
    type:String,
    default:"",
  },
  likedplaylist:{
    type:String,
    default:"",
  },
  subscribeartist:{
     type:String,
     default:"",
  }
})
const usermodel=mongoose.model('user',user);
module.exports=usermodel;