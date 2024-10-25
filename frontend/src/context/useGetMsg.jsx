import React, { useState, useEffect } from "react";
import useConversation from "../stateManage/useConversation";
import axios from "axios";

const useGetMsg = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(
            `api/messages/get/${selectedConversation._id}`
          );
          setMessages(res.data);
          setLoading();
        } catch (error) {
          console.log("Error in getting messages", error);
        } finally {
          setLoading(false);
        }
      }
    };
    getMessages();
  }, [selectedConversation, setMessages]);
  return { loading, messages };
};

export default useGetMsg;
