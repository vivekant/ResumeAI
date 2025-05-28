import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.mongouri}/resumeai`);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}




export default connectDB;


