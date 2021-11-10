const {check}=require('express-validator');

let result=null;
const validate=(method)=>{
    switch(method){
        case "Signup":{
            result=[
                check('UserName').exists(),
                check('Email').isEmail(),
                check('hash_Password').exists()
            ];
            return result;
        }
        case "Signin":{
            return[
                check('Email').isEmail(),
                check('Password').exists()
            ];
        }
    }  
}
module.exports={validate};