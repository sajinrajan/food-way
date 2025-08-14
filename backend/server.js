import express from "express"
import core from "cors"
import {connectDB} from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import { connect } from "mongoose"





//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(core())


// connect DB, then start server
connectDB().then(() => {
    app.use("/api/food", foodRouter);
});

// api endpoints
app.use( "/api/food",foodRouter)



 
app.get("/",(req,res)=>{
    res.send("APL Working")
})



app.listen(port,()=>{
    console.log(`Server Start on http://localhost:${port}`);
    
})