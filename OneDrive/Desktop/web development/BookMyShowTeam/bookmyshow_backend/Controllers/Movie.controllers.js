const mongoose=require('mongoose');
const{
    movies
}=require('../Models/Movies.model');
const display_Movies = async (req, res) => {
    try {
        console.log('inside here');
        const result=await movies.find();
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};
const  create_Movies=async(req,res)=>{
    const{
        MovieName,
        Url,
        Actor
    }=req.body;
    let result=new movies({
        MovieName,
        Url,
        Actor
    });
    console.log(result);
    try{
        result.save((err,res)=>{
            if(err){
                console.log(err);
            }
            if(res){
                console.log(res);
            }
        })
    }catch(error){
        console.log(error);
    }
}

const single_movies=async(req,res)=>{
    const{
        id
    }=req.params;
    console.log(id);
    let result=await movies.findOne({
        _id:id
    });
    console.log(result);
    res.send(result);
}
module.exports = {
    display_Movies,
    create_Movies,
    single_movies
}