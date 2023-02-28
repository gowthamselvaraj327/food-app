const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username:{
        type:String,
        trim:true,
        required:[true, 'Please enter a username']
    },
    password:{
        type:String,
        required:[true,'Please enter a password']
    },
});

module.exports=mongoose.model('Users', UsersSchema);