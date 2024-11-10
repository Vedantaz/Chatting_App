import React, { useContext } from "react";
import useConversation from "../../statemanage/useConversation";
import { useSocketContext } from "../../context/SocketContext";
import { CiMenuFries } from "react-icons/ci";

export default function ChatUser() {
  const { selectedConversation } = useConversation();
  const onlineUsers = useSocketContext(); // object form
  // console.log(onlineUsers);
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  return (
    <div className=" pl-5 pt-5 h-[12vh] flex space-x-4 bg-gray-700 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="../../assets/photo.jpg" alt="" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-xl">{selectedConversation.name}</h1>
        <span className="text-sm">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
}
