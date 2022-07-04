const mongoose = require('mongoose');
 
const PostSchema = new mongoose.Schema({

   title:{
       type:String,
       unique: true,
       required: true
   },
   desc:{
       type:String,
       required: true
   },
   photo:{
       type:String,
       required: false
   }
   ,author:{
       type:String,
       required: true
   },
   categories:{
    type:Array,
    requied:false
   }


},{timestamps:true});

module.exports = mongoose.model('Post',PostSchema)