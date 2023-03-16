const express = require('express');

const jwt = require("jsonwebtoken");

const User = require("../model/userSchema");


const cookieParser =require('cookie-parser');
const app= express();

app.use(cookieParser());
app.use(express.json());




const Authenticate = async (req, res, next) => {
    try { 
          console.log(`cokie is ${req.cookies.jsontoken}`);
          const token =   req.cookies.jsontoken;
          
            
        
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token});
        if (!rootUser) {
            console.log("user not found");
            throw new Error('User Not Found')
        }
    
            req.token=token;
            req.rootUser = rootUser;
            req.userID=rootUser._id;
          
    next();
    
    } catch (err) {
            res.status(401).send('unauthorized: no token provided');
            console.log(err);

        }

    }

module.exports = Authenticate;