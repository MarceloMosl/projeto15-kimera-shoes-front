import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Home from "./components/pages/home";
import React from "react";
import Category from "./components/pages/Category";
import BuyProd from "./components/pages/BuyProd";

export default function App() {
  const [userInt, setUserInt] = React.useState("");
  const [prodInt, setProdInt] = React.useState("");

  return (
    <>
      <h1>Kimera Shoes</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/home"
            element={<Home setUserInt={setUserInt} setProdInt={setProdInt} />}
          />
          <Route
            path="/category"
            element={<Category setProdInt={setProdInt} userInt={userInt} />}
          />
          <Route path="buyScreen" element={<BuyProd prodInt={prodInt} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
