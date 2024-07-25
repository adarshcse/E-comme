import express from 'express';
const app=express();
import dotenv from 'dotenv';
import db from './config/db.js';
import morgan from 'morgan'
import authRoutes from './routes/authRoutes.js'

dotenv.config();
db();
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/vi/auth',authRoutes);
const PORT=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("<h1>Hello World</h1>");
})
app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`)
})