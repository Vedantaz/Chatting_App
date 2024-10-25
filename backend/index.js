// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import UserRoute from "./routes/user.routes.js";
// import messageRoute from "./routes/message.routes.js";

// const app = express();
// dotenv.config();

// // middleware
// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());

// const PORT = process.env.PORT || 5001;
// const URI = process.env.MONGODB_URI;

// try {
//   mongoose
//     .connect(URI, {
//       ssl: true,
//     })
//     .then(console.log("MongoDb connected"));
// } catch (error) {
//   console.log(error);
// }

// // routes

// app.get("/", (req, res) => {
//   res.send("Vedant, all is running well");
// });

// app.use("/api/user", UserRoute);
// app.use("/api/message", messageRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import userRoute from "./routes/user.routes.js";
import messageRoute from "./routes/message.routes.js";
import { app, server } from "./socketIO/server.js";

// const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Vedant, all is running well");
});

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 3001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

//routes
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
