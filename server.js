import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config();
const PORT=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})