import mongoose from "mongoose";
import User from "./user.models";
import Message from "./conversation.models";

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
        type: mongoose.Schema.Type.ObjectId,
        ref: User,
      },
    ],
  },
  { timestamps: true }
);

const conversation = mongoose.model("conversation", conversationSchema);
export default conversation;
