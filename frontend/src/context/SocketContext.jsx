import { createContext, useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthProvider";
import { io } from "socket.io-client";

const SocketContext = createContext();

// it is a hook
export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuth(); // Destructure authUser from useAuth

  useEffect(() => {
    if (authUser) {
      const socket = io(`http://localhost:5173`, {
        query: {
          userId: authUser.user._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
