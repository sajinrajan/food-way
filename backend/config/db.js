// import mongoose from "mongoose";

//  export const connectDB = async () =>{
//     await mongoose.connect('mongodb://localhost:27017/onlineFood')
//     .then(()=> console.log("connected"));
// }
// export default connectDB




import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/onlineFood");
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error.message);
        process.exit(1); // stop server if DB fails
    }
};
