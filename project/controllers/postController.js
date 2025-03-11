import e from "express";
import Post from "../models/Post.js";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch {
    res.status(400).send("Error occured: " + err);
  }
};

export const getPostsByUserId = async (req, res, next) => {
  try {
    const posts = await Post.find({ creator: req.params.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).send("Error occured: " + err);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.creator = req.params.userId;
    await post.save();
    req.postId = post._id;
    res.status(201).json(post);
    next();
  } catch (err) {
    return res.status(400).send("Error occured: " + err);
  }
};

export const checkIfPostExistsForUser = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.creator.toString() != req.params.userId) {
      return res.status(400).send("Post not found for this user.");
    }
    next();
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(404).send("Post not found.");
    }
    return res.status(400).send("Error occured: " + err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    await post.deleteOne();
    res.status(200).json("Post deleted successfully.");
    next();
  } catch (err) {
    return res.status(400).send("Error occured: " + err);
  }
};
