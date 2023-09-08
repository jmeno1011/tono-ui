import React from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { About, Home } from "pages";
import Layout from "layout/Layout";
import { PDashboard, PLogin } from "pages/dashboard1";
import { useSelector } from "react-redux";
import { RootState } from "store";
import PLayout from "layout/dashboard1/PLayout";

function App() {
  const { pathname } = useLocation();
  const { loggedIn } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route
        path="/p-dashboard"
        element={
          pathname === "/p-dashboard" && loggedIn.p === false ? (
            <Navigate to="/p-login" replace />
          ) : (
            <PLayout />
          )
        }
      >
        <Route index element={<PDashboard />} />
      </Route>
      <Route
        path="/p-login"
        element={
          pathname === "/p-login" && loggedIn.p === false ? (
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
