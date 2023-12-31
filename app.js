const express=require('express');
const appointmentRoute=require("./routes/appointment.js")
const mongoose=require("mongoose")
const app=express();
const dotenv=require("dotenv")
const cors = require("cors");
app.use(cors());

dotenv.config()

app.use(express.json())

//app.use(express.json())

const connect = async()=>{
    await mongoose.connect(process.env.db);
    console.log("Connected with database !!! ")
};


app.use("/api",appointmentRoute)

app.get('/chahla',(req,res)=>{
        res.json('Nahla test endpoint');
});




app.get('/test',(req,res)=>{
    res.json('Test EP');
});

app.get('/',(req,res)=>{
    res.json('Devops Project made by Chahla');
});





app.listen(3000,()=>{
    connect()
    console.log("connected with succes to backend")
})
