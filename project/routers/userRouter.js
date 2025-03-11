import express from "express";
import {
  deleteUser,
  editUser,
  getUsers,
  createUser,
  checkIfUserExists,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);

router.post("/:userId/posts", checkIfUserExists);

export default router;
