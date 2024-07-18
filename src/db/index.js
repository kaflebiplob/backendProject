import mongooes from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
   await mongooes.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
     console.log(`MongoDB connected  `)
  } catch (error) {
    console.log("MONGODB connection error", error);
    process.exit(1);
  }
};

export default connectDB
