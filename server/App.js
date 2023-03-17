

const dotenv = require("dotenv");

const mongoose= require('mongoose');
const express = require('express');
const app = express();
dotenv.config({ path: './config.env'});
require('./db/conn');

app.use(express.json());
//const User = require('./model/userSchema');
app.use(require('./routers/auth'));


console.log("hello Anurag");
if (process.env.NODE_ENV === 'production') {
    //*Set static folder up in production
    app.use(express.static('client/build'));

    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
  }
  const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`running on port nso $(PORT)`);
})