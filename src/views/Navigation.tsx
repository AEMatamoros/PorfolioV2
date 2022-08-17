import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import { Home, Proyects, Blog, Contact } from "../components";
export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Proyects" element={<Proyects />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
