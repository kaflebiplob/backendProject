// -r dotenv/config --experimental-json-modules                   !!!!!!!!!!!!!!!important!!!!!
import connectDB from "./db/index.js";

import dotenv from 'dotenv';
dotenv.config();




connectDB()