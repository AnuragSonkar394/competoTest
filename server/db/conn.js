const mongoose= require('mongoose');
const DB= process.env.DATABASE;
mongoose.connect(
    DB,
    async(err)=>{
        if(err) throw err;
        console.log("conncted to db")
    }
);