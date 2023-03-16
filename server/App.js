

const dotenv = require("dotenv");

const mongoose= require('mongoose');
const express = require('express');
const app = express();
dotenv.config({ path: './config.env'});
require('./db/conn');

app.use(express.json());
//const User = require('./model/userSchema');
app.use(require('./routers/auth'));
const PORT = process.env.PORT;

console.log("hello Anurag");
app.listen(PORT,()=>{
    console.log(`running on port nso $(PORT)`);
})