import express from "express";
import { UserModel } from "../Model/Auth.js";
import {validationSignin,validationSignup} from "../validations/auth.js";
const Router = express.Router();
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
      return res.status(200).json({ token, status: "success" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  export default Router;