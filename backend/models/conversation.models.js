// import mongoose from "mongoose";
// import User from "../models/user.models.js";
// import Message from "./message.models.js";
// const conversationSchema = new mongoose.Schema(
//   {
//     members: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: User,
//       },
//     ],
//     messages: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: Message,
//         default: [],
//       },
//     ],
//   },
//   { timestamps: true }
// );

// const Conversation = mongoose.model("conversation", conversationSchema);
// export default Conversation;

import mongoose from "mongoose";
import User from "../models/user.models.js";
import Message from "./message.models.js";
const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: Message,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("conversation", conversationSchema);
export default Conversation;
