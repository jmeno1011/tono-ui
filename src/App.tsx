import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About, Home } from "pages";
import Layout from "layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
