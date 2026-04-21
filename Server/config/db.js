import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mangoose.connect(process.env.MONGO_URI, {
      userNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
