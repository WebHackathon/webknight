const jwt=require('jsonwebtoken');
function jsonwebtokens(Password,Email){
    return(jwt.sign({'Password':Password,'Email':Email}, 'secret', { expiresIn: '1d' }))
};


const valiadate_token=(token)=>{
    console.log("the token is : ",token);
    let val=jwt.verify(token,'secret');
    console.log("the val is : ",val);
    return val;
};

module.exports={jsonwebtokens,valiadate_token};