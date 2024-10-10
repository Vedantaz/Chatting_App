import React, { useState, useEffect } from "react";
import { useSocketContext } from "./SocketContext";
// import useConversation from
import sound from "../assets/notification.mp3";

export default useGetSocketMsg = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
      notification.play();
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};
