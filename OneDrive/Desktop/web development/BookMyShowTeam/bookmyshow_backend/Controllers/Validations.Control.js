const{
    valiadate_token
}=require('../Middlewares/Token');
const  checkValidations=(req,res)=>{
    console.log('inside headers');
    console.log(req.headers.authorization);
    let arr=req.headers.authorization.split(' ');
    let result=valiadate_token(arr[2]);
    console.log(result);
    res.json({status:200,message:result});
}
module.exports={
    checkValidations
}