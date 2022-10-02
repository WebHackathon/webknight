import express from "express";
import cors from "cors";
import helmet from "helmet";
import "./DB/index.js";
import Auth from"./Controllers/Auth.en.js";
import ip from "ip";
const portal = express();
portal.use(cors());
portal.use(express.json());
portal.use(helmet());
portal.use("/auth",Auth);
console.log(ip.address());
portal.listen(8080,()=>{
    console.log("Server is connected to the port 8080");
})
