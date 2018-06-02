const mongoose = require('mongoose');


const UserSchema = mongoose.Schema({
    user_name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required: true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

//exporting the schema
const Contact = module.exports = mongoose.model('Contact',UserSchema);