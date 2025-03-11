import express from "express";
import {
  deleteUser,
  editUser,
  getUsers,
  createUser,
  checkIfUserExists,
  addPostToUser,
  deletePostFromUser,
} from "../controllers/userController.js";
import {
  checkIfPostExistsForUser,
  createPost,
  deletePost,
  getPosts,
  getPostsByUserId,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);

router.get("/:userId/posts", checkIfUserExists, getPostsByUserId);

router.post("/:userId/posts", checkIfUserExists, createPost, addPostToUser);

router.delete(
  "/:userId/posts/:postId",
  checkIfUserExists,
  checkIfPostExistsForUser,
  deletePost,
  deletePostFromUser
);

export default router;
