// creating express server 
import express from "express";
import authRoutes from "./routes/auth.routes.js"
import dotenv from "dotenv";
import { connect } from "mongoose";
import connectMongoDB from "./db/connectMongoDB.js";

//using this we will be able to read 
dotenv.config(); 

const app = express();
const PORT= process.env.PORT || 5000;

//getting undeffined because we cannot read it(go to line 6 now)
// console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes) ;


app.listen(PORT,()=>{
    console.log(`Server is running at port: ${PORT}`);
    connectMongoDB()
});
