const { default: mongoose } = require('mongoose');


const userRegistration = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:Number,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    // token:String
})

const User = mongoose.model('usercollection',userRegistration);

module.exports = User;