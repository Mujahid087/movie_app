import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./config/db.js";



// routes 

import userRoutes from "./routes/userRoutes.js"

const app=express();
dotenv.config();
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());



const PORT=process.env.PORT || 3000



// routes 
app.use("/api/v1/users",userRoutes)









app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})