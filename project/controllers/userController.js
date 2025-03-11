import User from "../models/User.js";
import mongoose from "mongoose";
import { createPost } from "./postController.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error occured: " + err);
  }
};

export const createUser = async (req, res) => {
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
};

export const editUser = async (req, res) => {
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
};

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.deleteOne();
    res.status(200).json("User deleted successfully.");
  } catch (err) {
    console.log(err);
    res.status(400).send("Error occured: " + err);
  }
};

export const checkIfUserExists = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    next();
  } catch (err) {
    if (err instanceof mongoose.CastError) {
      return res.status(404).send("Invalid User ID");
    }
    return res.status(400).send("Error occured: " + err);
  }
};

export const addPost = async (req, res, next) => {
  try {
    let user = await User.findById(req.params.userId);
    await createPost(req, res, next);
    user = await User.findById(req.params.userId);
    user.posts.push(req.postId);
    await user.save();
  } catch (err) {
    console.log(err);
  }
};

export const deletePostFromUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    console.log(req.params.postId);
    user.posts = user.posts.filter((postId) => postId != req.params.postId);
    await user.save();
    next();
  } catch (err) {
    return res.status(400).send("Error occured: " + err);
  }
};
