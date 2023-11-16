import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();


const connect = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message);
    }
}


app.listen(process.env.PORT, ()=>{
    connect();
    console.log(`Server connected to ${process.env.PORT}`);
})