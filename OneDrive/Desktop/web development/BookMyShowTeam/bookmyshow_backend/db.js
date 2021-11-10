const mongoose=require('mongoose');
const url="mongodb+srv://riddhishwar:Mayurie@cluster0.son3w.mongodb.net/BookMyShow?retryWrites=true&w=majority";
const movModel=mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(res=>{
    console.log("successfully connencted");
});
const dbConn=mongoose.connection;
module.exports={
    dbConn
}