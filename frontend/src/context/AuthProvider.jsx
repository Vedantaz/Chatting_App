import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatApp");
  console.log(initialUserState);

  // parse the user data and storing in state.
  const { authUser, setAuthUser } = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );

  // Sync authUser with localStorage when it changes
  // useEffect(() => {
  //   if (authUser) {
  //     localStorage.setItem("ChatApp", JSON.stringify(authUser));
  //     console.log("authUser exists");
  //   } else {
  //     localStorage.removeItem("ChatApp");
  //   }
  // }, [authUser]);
  console.log(authUser);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
