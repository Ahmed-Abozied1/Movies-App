//connect MongosDB with mongoose

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongosDB Connected!!");
  } catch (error) {
    console.log(`Error connecting ${error.message}`);
    process.exit(1);
  }
};
