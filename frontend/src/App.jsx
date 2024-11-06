import React from "react";
import Left from "./home/left/Left";
import Right from "./home/right/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Logout from "./home/left1/Logout";
import Loading from "./components/Loading";

import { Navigate, Route, Routes, Router } from "react-router-dom";

function App() {
  const { authUser } = useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Loading /> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
