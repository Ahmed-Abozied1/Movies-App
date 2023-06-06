import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./Routes/UserRouter.js";
import moviesRouter from "./Routes/MoviesRouter.js";
import { errorHandler } from "./middlewares/ErrorMiddleWare.js";


dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// connect DB
connectDB();
// Main route
app.get("/", (req, res) => {
  res.send("Api is Running.");
});
//other routes
app.use("/api/users", userRouter);
app.use("/api/movies", moviesRouter);
//error handling
 app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost/${PORT}`);
});
 