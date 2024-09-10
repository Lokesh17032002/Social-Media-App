import mongoose from "mongoose";

//The connection to MongoDB can take time, so we make the function asynchronous 
//using async. This allows you to handle the database connection without blocking 
//other operations.
const connectMongoDB = async() => {
    try {
        // Mongoose library ka connect function use karke MongoDB se connect kar rahe hain
        // Connection string ko env variable MONGO_URI se le rahe hain
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        // Agar connection mein koi error aata hai toh uska message console mein print karenge
        console.error(`Error connection to mongoDB: ${error.message}`);
        
        // Process ko exit kar dete hain kyunki agar MongoDB connect nahi hota toh app sahi se nahi chalega
        process.exit(1);
    }
}

export default connectMongoDB;

