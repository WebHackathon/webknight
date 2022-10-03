import express from "express";
import otp_generator from "otp-generator";
import { UserModel } from "../Model/Auth.js";
import {validationSignin,validationSignup,twofactorauthentication,otpgeneration} from "../validations/auth.js";

const Router = express.Router();
let OTP_GENERATOR="";
/**
 * Router       /signup
 * Des          Register new user
 * Params       none
 * Access       Public
 * Method       POST
 */
 Router.post("/signup", async (req, res) => {
    try {
      await validationSignup(req.body.credentials);
      await UserModel.findByEmailAndPhone(req.body.credentials);
      const newUser = await UserModel.create(req.body.credentials);
      const token = newUser.generateJwtToken();
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  
  /**
   * Router       /signin
   * Des          Sign-in with email and password
   * Params       none
   * Access       Public
   * Method       get
   */
  Router.get("/signin", async (req, res) => {
    try {
      await validationSignin(req.body.credentials);
      const user = await UserModel.findByEmailAndPassword(req.body.credentials);
      const token = user.generateJwtToken();
      //OTP_GENERATOR=otp_generator.generate(6, { upperCaseAlphabets: false, specialChars: false });
      //console.log(OTP_GENERATOR);
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  Router.get("/otpgeneration",async(req,res)=>{
    const{
      email
    }=req.body;
    console.log(email);
    try{
        let opt_generate=otpgeneration("generate",email);
        //await twofactorauthentication(opt_generate,);
        return res.status(200).json({opt_generate, status: "success" })
    }catch(error){
      console.log(error);
    }
  })
  Router.get("/emailauth",async(req,res)=>{
    const{
      otp
    }=req.body;
    try{
      //let opt_generate=otpgeneration("verify",email);
      console.log(typeof(otp));
      if(otpgeneration("verify",otp)){
        return res.status(200).json({otp,status: "success" });
      }else{
        return res.status(404).json({otp,status: "failure" });
      }
    }catch(error){
      return res.status(500).json({ error: error.message });
    }
  })
  export default Router;