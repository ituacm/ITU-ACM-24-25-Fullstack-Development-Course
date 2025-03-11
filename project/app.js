import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/fullstack_course");
const db = mongoose.connection;
db.on("error", (error) => {
  console.log("Error in connecting to database: ", error);
});
db.once("open", () => {
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
