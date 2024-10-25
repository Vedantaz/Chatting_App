// import express from "express";
// import {
//   signup,
//   allUsers,
//   login,
//   logout,
// } from "../controller/user.controllers.js";
// import secureRoute from "../middleware/secureRoute.js";

// const router = express.Router();

// router.post("/signup", signup);
// router.post("/login", login);
// router.post("/logout", logout);
// router.get("/allusers", secureRoute, allUsers);

// export default router;

import express from "express";
import {
  allUsers,
  login,
  logout,
  signup,
} from "../controller/user.controllers.js";
import secureRoute from "../middleware/secureRoute.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers", secureRoute, allUsers);

export default router;
