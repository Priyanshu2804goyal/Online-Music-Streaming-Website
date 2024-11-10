const mongoose=require('mongoose');
const  song=new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   thumbnail:{
    type:String,
    required:true,
   },
   track:{
    type:String,
    required:true,
   },
   artist:{
    type:mongoose.Types.ObjectId,
     ref:"user"
   }

});
const songmodel=mongoose.model("song",song);
module.exports=songmodel;