import express from "express";
import {
  signup,
  allUsers,
  login,
  logout,
} from "../controller/user.controllers.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/allUsers", allUsers);
router.post("/logout", logout);

export default router;
