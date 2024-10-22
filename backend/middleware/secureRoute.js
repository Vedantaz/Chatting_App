import jwt from "jsonwebtoken";
import User from "../models/user.models.js";

const secureRoute = async (req, res, next) => {
  try {
    const token = req.cookie.jwt;
    if (!token)
      return res.status(401).json({ msg: "No token, authorization denied." });

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    if (!decoded) return res.status(401).json({ error: "Invalid token" });

    const user = await User.findById(decoded.userId).select("-password"); // current loggedIn user
    if (!user) return res.status(401).json({ error: "No user found" });

    req.user = user;
    next();
  } catch (error) {
    console.log("Error in secureRoute");
    res.status(500).json({ error: "Internal server error" });
  }
};
export default secureRoute;
