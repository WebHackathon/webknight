import joi from 'joi';
import { Schema } from 'mongoose';
import nodemailer from "nodemailer";
export const validationSignup =(userData)=>{
    const Schema=joi.object({
        fullname :joi.string().required().min(5).max(30),
        email:joi.string().email().required(),
        password:joi.string().min(5),
        phoneNumber:joi.number()
    });
    //Validate the data asynchronisly
    console.log("success validation");
    return Schema.validateAsync(userData);
}

export const validationSignin = (userData)=>{
    const Schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().required()
    })
  
    return Schema.validateAsync(userData);
}
export const twofactorauthentication=(OTP_GENERATOR,userData)=>{
    console.log(userData);
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'riddhishs75@gmail.com',
          pass: 'ndobcbdbwcxuqrut'
        }
      });
       
      var mailOptions = {
        from:'riddhishs75@gmail.com',
        to:userData.email,
        subject: 'two factor authnetication',
        text:OTP_GENERATOR
      };
       
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    return true;
}