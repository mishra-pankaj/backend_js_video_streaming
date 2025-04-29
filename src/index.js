import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})




connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,() =>{
        console.log(`SEVER IS RUNNING AT PORT:${process.env.PORT}`);
        
    })
})
app.on("error",(error)=>{
    console.log("error:",error);
    process.exit(1)
    
})
.catch((err) =>{
    console.log("MONGODB CONNECTION FAILED!!!",err)
})

















/*import express from "express"
const app = express()

( async() => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("error", (error) =>{
            console.log("ERROR:", error);
            throw error
            
        })
        app.listen(process.env.PORT,() =>{
            console.log(`APP is listening on port ${process.env.PORT}`);
            
        })
    } catch (error) {
       console.log("ERROR:", error);
       throw err
        
    }
})()
    */