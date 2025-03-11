import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json("Error occured: " + err);
  }
};

export const getPostsByUserId = async (req, res) => {
  try {
    const posts = await Post.find({ creator: req.params.userId });
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json("Error occured: " + err);
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
  } catch (err) {
    console.log(err);
  }
};

export const editPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.creator = req.body.creator || post.creator;
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(400).json("Error occured: " + err);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.postId);
    await post.deleteOne();
    res.status(200).json("Post deleted successfully.");
    next();
  } catch (err) {
    console.log(err);
  }
};
