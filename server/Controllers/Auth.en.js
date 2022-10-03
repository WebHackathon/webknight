import express from "express";
import otp_generator from "otp-generator";
import { UserModel } from "../Model/Auth.js";
import {validationSignin,validationSignup,twofactorauthentication} from "../validations/auth.js";
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
      OTP_GENERATOR=otp_generator.generate(6, { upperCaseAlphabets: false, specialChars: false });
      twofactorauthentication(OTP_GENERATOR,req.body.credentials);
      console.log(OTP_GENERATOR);
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  Router.get("/emailauth",async(req,res)=>{
    try{
      console.log(req.body.credentials.otp);
      if(OTP_GENERATOR===req.body.credentials.otp){
        return res.status(200).json({OTP_GENERATOR, status: "success" });
      }
      throw new Error("OTP does not match!");
    }catch(error){
      return res.status(500).json({ error: error.message });
    }
  })
  export default Router;