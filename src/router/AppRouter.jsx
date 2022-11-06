import React from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import Main from "../pages/Main";
import PrivateRouter from "./PrivateRouter";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="***" element={<PrivateRouter />}>
          <Route path="***" element={<MovieCard />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
