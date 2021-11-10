const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const Signup= new mongoose.Schema({
    "UserName":{
        type:String,
        required:[true,"Please provide Email"]
    },
    "Email":{
        type:String,
        required:[true,"Please provide Email"]
    },
    "Password":{
        type:String,
        required:[true,"Please provide password"]
    }
});
Signup.virtual('hash_Password').set(function(hash_Password){
    this.Password = bcrypt.hashSync(hash_Password, 10);
});
const UserDetails=mongoose.model('UserDetails',Signup);
module.exports={
    UserDetails
}