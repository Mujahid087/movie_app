import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import path from "path"



// routes 

import userRoutes from "./routes/userRoutes.js"
import moviesRoutes from "./routes/moviesRoutes.js"
import genreRoutes from "./routes/genreRoutes.js"
import uploadRoutes from "./routes/uploadRoutes.js"

const app=express();
dotenv.config();
connectDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());



const PORT=process.env.PORT || 3000



// routes 
app.use("/api/v1/users",userRoutes)
app.use("/ai/v1/movies",moviesRoutes)
app.use("/api/v1/genre", genreRoutes);
app.use("/api/v1/upload", uploadRoutes);



const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname + "/uploads")));



app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})