const express=require('express');
const{
    Signup
}=require('./Controllers/Signup.control');
const{
    validate,
    valiadate_token
}=require('./Middlewares/Validation');
const{
    Signin
}=require('./Controllers/Signin.control');
const{
    checkValidations
}=require('./Controllers/Validations.Control');
const Router=express.Router();

Router.use('/',require('./Routers.js/createMovies'));
Router.post('/Signup',validate('Signup'),Signup);
Router.post('/Signin',validate('Signin'),Signin);
Router.get('/check_validatons',checkValidations)
module.exports=Router;