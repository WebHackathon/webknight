const express=require('express');
const app=express();
const db=require('./db');
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use('/',require('./Router'));
app.listen('8080',()=>{
    console.log("Running....");
})