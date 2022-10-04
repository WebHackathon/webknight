import express from "express";
import ip from "ip";
import { UserModel } from "../Model/Auth.js";
const Router = express.Router();

Router.get("/:id", async (req, res) => {
    let device_ip = ip.address();
    let referral_code = req.params.id;
    console.log(referral_code);
    //db.demo414.aggregate([{$unwind: "$details"}, {$match:{"details.StudentMarks" :56}}] )
    //db.users.findOne({"_id": id},{awards: {$elemMatch: {award:'Turing Award', year:1977}}})
    try {
        UserModel.findOne({_id:referral_code}, function (err, data) {
            if (err) {
                res.send("IP checking is in problem");
            }else{
                if(data.ip_visited.includes(device_ip)){
                    res.send("Already used this referral address");
                }else{
                    data.ip_visited.push(device_ip)
                    data.save();
                    res.send("successfully referral added");
                }
            }
        })
    } catch (error) {
      return res.status(500).json({ error: error.message,ll:"sfsd" });
    }
});


export default Router;