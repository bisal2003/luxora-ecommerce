require('dotenv').config()
const mongoose=require("mongoose")

let isConnected = false;

exports.connectToDB=async()=>{
    if (isConnected) {
        console.log('Using existing MongoDB connection');
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 30000,
        })
        isConnected = true;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}