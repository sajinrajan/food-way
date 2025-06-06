import mongoose from "mongoose";
// const mongoose = require("mongoose")

 export const connectDB = async () =>{
    await mongoose.connect('mongodb://localhost:27017/onlineFood').then(()=> console.log("connected"));
    

}


export default connectDB