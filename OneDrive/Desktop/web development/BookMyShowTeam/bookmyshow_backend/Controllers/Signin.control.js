const {
    UserDetails
} = require('../Models/SignUp.model');
const {
    jsonwebtokens,
    valiadate_token
} = require('../Middlewares/Token');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const Signin =async (req, res) => {
    const {
        Email,
        Password
    } = req.body;
    console.log({
        Email,
        Password
    });
    let err = validationResult(req);
    try{
        if(err.isEmpty()){
            console.log('empty');
            let result=await UserDetails.findOne({
                Email:Email
            });
            console.log(result);
            if(result==null){
                res.json({status:401,message:"Email Invalid"});
            }
            if(result){
                let key=bcrypt.compareSync(Password,result.Password);
                if(key){
                    let token=jsonwebtokens(Password,Email)
                    res.json({status:200,message:"Successfully LoggedIn",token:token});
                }
                else{
                    res.json({status:401,message:"Password "});
                }
            }
            /*.exec((error,respond)=>{
                if(error){
                    console.log('hi');
                }
                if(respond){
                    let key=bcrypt.compareSync(Password,respond.Password);
                    if(key){
                        res.json({status:200,message:"Successfully LoggedIn"})
                    }
                    else{
                        res.json({status:401,message:"Password "});
                    }
                }
            })*/
        }else{
            res.json({status:401,message:err});
        }
    }catch(error){
        console.log(error);
    }
        /*if (err.isEmpty()) {
            await UserDetails.findOne({
                "Email": Email
            }).then(response=> {
                console.log(passwd);
                console.log(response.Password);
                let pass = bcrypt.compareSync(passwd,response.Password);
                if (pass) {
                    let js=jsonwebtokens(Password,Email);
                    valiadate_token(js)
                    //let rep=req.Headers['Authorization'];
                    res.json({ status: 200, message: "Successfully registered",token:js})
                } else { res.json({ status: 401, message: "Invalid Password" }) }
            }).catch(response => {
                console.log(response);
               //res.json({ status: 401, message: "Invalid Email" })
            });
        } else {
            res.json({ status: 401, message:"Invalid Email" })
        }
    }catch(error){
        res.json({ status: 401, message: err.errors })
    }*/
    /*try {
        let response=await UserDetails.findOne({
            "Email": Email
        }).then(respond => {
            let pass=bcrypt.compareSync(Password, respond.Password);
            if(pass){
                let js=jsonwebtokens(Password);
                console.log("the js is : ",js);
                jwt.verify(js,'secret',(err, decoded)=>{
                    if(err){
                        console.log(err);
                    }
                    if(decoded){
                        console.log("token veified");
                    }
                });
                res.json({status:200,message:"Registered Successfully",token:js});
            }
            else{
                res.json({status:401,message:respond});
            }  
        }).catch((respond)=>{
            res.json({status:401,message:respond})
        })
    }catch(error){
        res.json({status:400,message:"Connection failured ! Try again"});
    }*/
};
module.exports = { Signin };