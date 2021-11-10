const express=require('express');
const Router=express.Router();
const{
    display_Movies,
    create_Movies,
    single_movies
}=require('../Controllers/Movie.controllers');

Router.get('/movies',display_Movies);
Router.post('/movies',create_Movies);
Router.get('/movies/:id',single_movies)

module.exports=Router;