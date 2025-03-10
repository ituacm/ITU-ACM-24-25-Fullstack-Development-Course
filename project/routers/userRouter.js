import express from "express";
import {
  deleteUser,
  editUser,
  getUsers,
  createUser,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.patch("/:id", editUser);

router.delete("/:id", deleteUser);
