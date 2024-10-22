import express from "express";
import {
  signup,
  allUsers,
  login,
  logout,
} from "../controller/user.controllers.js";
import secureRoute from "../middleware/secureRoute.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/allUsers", secureRoute, allUsers);
router.post("/logout", logout);

export default router;
