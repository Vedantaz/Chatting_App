import React, { useState } from "react";
import useConversation from "../statemanage/useConversation";

import axios from "axios";
axios.defaults.withCredentials = true;

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessages([...messages, res.data]);
      setLoading(false);
    } catch (error) {
      console.log("Error in send messages", error);
      setLoading(false);
    }
  };
  return { loading, sendMessages };
};

export default useSendMessage;
