import React from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { About, Home } from "pages";
import Layout from "layout/Layout";
import { PDashboard, PLogin } from "pages/dashboard1";
import { useSelector } from "react-redux";
import { RootState } from "store";

function App() {
  const { pathname } = useLocation();
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  console.log(pathname);
  console.log(loggedIn.p);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route
        path="/p-dashboard"
        element={
          pathname === "/p-dashboard" && (loggedIn.p === undefined || null) ? (
            <Navigate to="/p-login" replace />
          ) : (
            <PDashboard />
          )
        }
      ></Route>
      <Route
        path="/p-login"
        element={
          pathname === "/p-login" && (loggedIn.p === undefined || null) ? (
            <PLogin />
          ) : (
            <Navigate to="/p-dashboard" replace />
          )
        }
      />
    </Routes>
  );
}

export default App;
