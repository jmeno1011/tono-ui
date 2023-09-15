import React from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { About, Home } from "pages";
import Layout from "layout/Layout";
import { PDashboard, PLogin } from "pages/dashboard1";
import { useSelector } from "react-redux";
import { RootState } from "store";
import PLayout from "layout/dashboard1/PLayout";
import PSurvey from "pages/dashboard1/Survey/PSurvey";

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
        <Route path="p-survey" element={<PSurvey />} />
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
