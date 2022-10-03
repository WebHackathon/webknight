//packages
import express from "express";
import cors from "cors";
import helmet from "helmet";
import "./DB/index.js";
import Auth from"./Controllers/Auth.en.js";
import Referral from "./Controllers/Referral.js";
import ip from "ip";
const portal = express();
portal.use(cors());
portal.use(express.json());
portal.use(helmet());
//Routing part 
portal.use("/auth",Auth);
portal.use("/invite",Referral);
console.log(ip.address());
portal.listen(8080,()=>{
    console.log("Server is connected to the port 8080");
})
