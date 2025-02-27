import express from "express";
import mongoose from "mongoose";
import User from "./models/User.js";

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

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error occured: " + err);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error occured: " + err);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error occured: " + err);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.deleteOne();
    res.status(200).json("User deleted successfully.");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error occured: " + err);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
