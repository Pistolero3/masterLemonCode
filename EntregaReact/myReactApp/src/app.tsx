import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/login";
import { ListPage } from "./pages/list";
import { DetailPage } from "./pages/detail";
import RickPage from "./pages/rick";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/detail/rick/:id" element={<DetailPage rick />} />
        <Route path="/detail/member/:id" element={<DetailPage />} />
        <Route path="/rick" element={<RickPage />} />
      </Routes>
    </Router>
  );
};
