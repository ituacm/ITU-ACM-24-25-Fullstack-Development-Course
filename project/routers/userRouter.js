import express from "express";
import {
  deleteUser,
  editUser,
  getUsers,
  createUser,
  checkIfUserExists,
  addPost,
  deletePostFromUser,
} from "../controllers/userController.js";
import {
  createPost,
  deletePost,
  getPostsByUserId,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);

router.get("/:userId/posts", checkIfUserExists, getPostsByUserId);

router.post("/:userId/posts", addPost);

router.delete(
  "/:userId/posts/:postId",
  checkIfUserExists,
  deletePost,
  deletePostFromUser
);

export default router;
