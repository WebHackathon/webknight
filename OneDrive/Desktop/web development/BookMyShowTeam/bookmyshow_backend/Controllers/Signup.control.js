const { UserDetails } = require('../Models/SignUp.model');
const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const Signup = async (req, res) => {
    const {
        UserName,
        Email,
        hash_Password
    } = req.body;
    let err = validationResult(req);
    if (err.isEmpty()) {
        let result = new UserDetails({
            UserName,
            Email,
            hash_Password
        });
        console.log(result);
        result.save((err,respond)=>{
            if(err){
                console.log("Error occured in backend");
                res.status(400).json({message:err})
            }
            if(respond){
                res.json({message:"Successfully Registered",status:400})
            }
        });
    }
    else {
        res.json({ message: err, status: 401 })
    }
};
module.exports = {
    Signup
};