import mongoose from "mongoose";
import { DB_NAME } from "../constant.js"


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Connected to MongoDB: ${connectionInstance.connection.host}`)
        // console.log(connectionInstance.connection.name)
    }catch (error) {
        console.log("MongoDB connection failed", error)
        process.exist(1);
    }
}

export default connectDB;