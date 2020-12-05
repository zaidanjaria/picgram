const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min : 4
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        min : 6
    },
    date : {
        type :Date,
        default : Date.now
    },
    resetToken:String,
    expireToken:Date,
    pic:{
     type:String,
     default:""
    },
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

module.exports =  mongoose.model("User",userSchema);