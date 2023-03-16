const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { json } = require('express');
const express = require('express');
const routers= express.Router();
routers.use(express.json());
const bcrypt= require('bcryptjs');
const authenticate =require("../middleware/authenticate.js");
require('../db/conn');

const User = require("../model/userSchema");


routers.use(cookieParser());

routers.get('/',(req,res)=>{
    res.send(`Hello WOrld from the server router`);

});

   
  //  console.log( req.body);
  
 //  res.json({message: req.body});
  /* routers.post('/register',(req,res)=>{
      const {name, email,phone,work,password,cpassword}=req.body;

     User.findOne({ email: email })
        .then((userExist) => {
            if (userExist) {
                return res.status(422).json({ error: "email already" });
            }

            const user = new User({ name, email, phone, work, password, cpassword });
            user.save().then(() => {
                res.status(201).json({ message: "user registered" });

            }).catch(err => { console.log(err); });


        });*/


    // Usring Async Await
    routers.post('/register',async (req,res)=>{
        const {team_name, team_email,team_phone,password,cpassword}=req.body;
   
     try{
        const userExist= await  User.findOne({team_email:team_email});
        
            if(userExist){
                return res.status(422).json({error:"email already"});
            }
    
            const user = new User({team_name,team_email,team_phone,password,cpassword});
             
            
            await user.save();

            res.status(201).json({message: "user registered"});
    
            }

     
      catch(err){
        console.log(err);
      }
   
   

});

//  For LogIn


routers.post('/signin',async (req,res)=>{
       console.log(req.body);

    try{
        
        const {team_email,password}=req.body;
        if(!team_email || !password){
            return res.status(400).json({error:"Plz Fill the data"})
        }
        const userLogin=await User.findOne({team_email:team_email});
        

        console.log("hello");
        if(userLogin){
          console.log("hello");
        const isMatch= await bcrypt.compare(password,userLogin.password);
        
        const token = await userLogin.generateAuthToken();
       
        console.log(token);
         res.cookie("jsontoken",token, {
            expires:new Date(Date.now() + 25892000000),
            httpOnly:false,
        });

        if(!isMatch){
            res.status(400).json({error: "inavalid b Credentials"});

        }
      
        else{
            res.status(201).json({message:"user signin Successfully"});
        }}
        else
        res.status(400).json({error: "inavalid n Credentials"});
    }catch(err){
        console.log(err);
    }
});
  

  routers.get('/about', authenticate ,async (req,res)=>
  {
      console.log(`hello mt About`);
      res.status(200).send(req.rootUser);
  });
  routers.get('/logout', async (req,res)=>
  {
      console.log(`hello mt About`);
      res.clearCookie('jsontoken', {path:'/'});
      res.status(200).send('user Logout');
  }); 

  


 
module.exports = routers;