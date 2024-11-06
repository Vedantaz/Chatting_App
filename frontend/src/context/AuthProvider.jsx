import React, { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import Loading from "../components/Loading";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialUserState =
    Cookies.get("jwt") || localStorage.getItem("ChatApp");
  // console.log(initialUserState);

  // parse the user data and storing in state.
  const [authUser, setAuthUser] = useState(
    initialUserState ? JSON.parse(initialUserState) : undefined
  );

  // console.log(authUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (initialUserState) {
      setAuthUser(JSON.parse(initialUserState));
      // console.log("In initialUserState");
    }
    setLoading(false); // Set loading to false once authUser is initialized
  }, []);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
