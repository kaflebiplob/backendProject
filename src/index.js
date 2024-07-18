// -r dotenv/config --experimental-json-modules                   !!!!!!!!!!!!!!!important!!!!!

import app from "./app.js";
import connectDB from "./db/index.js";

import dotenv from "dotenv";
dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
      app.on("error", (error) => {
        console.log("ERROR OCCURED", error);
      });
    });
  })
  .catch((error) => {
    console.log("MONGODB ERROR!!!", error);
  });
