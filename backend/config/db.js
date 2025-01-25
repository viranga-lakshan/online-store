import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URl)
        console.log("MongoDB connection success");

    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }


}

export default connectDB;	