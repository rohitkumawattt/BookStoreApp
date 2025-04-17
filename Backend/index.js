import express from 'express'
import dotenv from "dotenv"
import mongoose from 'mongoose'
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from 'cors'



const app = express()
app.use(cors());
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDB_URI;

// connect to mongoDB 

try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
} catch (error) {
    
    console.error("MongoDB connection error:", error);
}

// Defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})