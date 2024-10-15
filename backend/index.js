import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import UserRoute from "./routes/user.routes.js";

const app = express();
dotenv.config();

// middleware
app.use(express.json());

const PORT = process.env.PORT || 3002;
const URI = process.env.MONGODB_URI;

try {
  mongoose
    .connect(URI, {
      ssl: true,
    })
    .then(console.log("MongoDb connected"));
} catch (error) {
  console.log(error);
}

app.get("/", (req, res) => {
  res.send("Vedant, all is running well");
});

app.use("/user", UserRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
