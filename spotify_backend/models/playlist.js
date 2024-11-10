const mongoose=require('mongoose');
const  playlist=new mongoose.Schema({
   name:{
    type:String,
    required:true,
   },
   thumbnail:{
    type:String,
    required:true,
   },
   owner:{
    type:mongoose.Types.ObjectId,
     ref:"user"
   },
   // song konse hai
   // collaborator kon hai;
   songs:[
    {
        type:mongoose.Types.ObjectId,
        ref:"song",
    }
],
collaborators:[{
  type:mongoose.Types.ObjectId,
  ref:"user",
}]

});
const playlistmodel=mongoose.model("playlist",playlist);
module.exports=playlistmodel;