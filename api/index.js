import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected to MONGODB"))
  .catch((err) => console.log(err));

const app = express();

//it allows json as a input of the server
app.use(express.json());

app.listen(5000, () => console.log("server running on 5000"));

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    succuss: false,
    statusCode,
    message,
  });
});
