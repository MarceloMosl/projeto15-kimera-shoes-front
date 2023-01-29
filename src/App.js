import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Home from "./components/pages/home";
import React, { useContext, useState } from "react";
import Category from "./components/pages/Category";
import BuyProd from "./components/pages/BuyProd";
import Sales from "./components/pages/Sales";
import UserContext from "./components/context/UserContext";

export default function App() {
  const [userInt, setUserInt] = React.useState("");
  const [prodInt, setProdInt] = React.useState("");
  const [user, setUser] = React.useState(null);

  return (
    <>
    <UserContext.Provider value = {{user, setUser}}>
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
          <Route path="/sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
