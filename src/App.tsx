import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { About, Home } from "pages";
import Layout from "layout/Layout";
import { PDashboard, PLogin } from "pages/dashboard1";

function App() {
  const { pathname } = useLocation();
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
      <Route path="/p-dashboard" element={<PDashboard />}>

      </Route>
      <Route path="/p-login" element={<PLogin />} />
    </Routes>
  );
}

export default App;
