const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide name'],
        minLength:3,
        maxLength:50,
    }
})