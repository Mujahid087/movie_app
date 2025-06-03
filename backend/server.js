import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./config/db.js";

const app=express();
dotenv.config();
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());



const PORT=process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})