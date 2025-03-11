import Post from "../models/Post.js";

export const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch {
    res.status(400).send("Error occured: " + err);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    post.creator = req.params.creator;
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).send("Error occured: " + err);
  }
};
