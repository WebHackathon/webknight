const mongoose=require('mongoose');
const Movies=new mongoose.Schema({
    "MovieName":{
        type:String,
        required:true
    },
    "Url":{
        type:String,
        required:true
    },
    "Actor":{
        type:String,
        required:true,
    }
},{
    timestamps:true
});
const movies=mongoose.model('Movies',Movies);
module.exports={
    movies
}