import joi from 'joi';
import { Schema } from 'mongoose';
import otp_generator from "otp-generator";
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
    console.log(otp_generator.generate(6, { upperCaseAlphabets: false, specialChars: false }));
    return Schema.validateAsync(userData);
}