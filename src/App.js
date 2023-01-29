import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import homeIcon from "./assets/icons/home.svg";
import cartIcon from "./assets/icons/cart.svg";

import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Home from "./components/pages/home";
import React, { useContext, useState } from "react";
import Category from "./components/pages/Category";
import BuyProd from "./components/pages/BuyProd";
import Sales from "./components/pages/Sales";
import UserContext from "./components/context/UserContext";
import styled from "styled-components";

export default function App() {
  const [userInt, setUserInt] = React.useState("");
  const [prodInt, setProdInt] = React.useState("");
  const [user, setUser] = React.useState(null);

  return (
    <>
    <UserContext.Provider value = {{user, setUser}}>
      <h1>Kimera Shoes</h1>
      <BrowserRouter>

        <StyledNav>
          <Link to="/home">
            <img src={homeIcon} alt="casa azul" />
          </Link>
          <Link to="/sales">
            <img src={cartIcon} alt="carrinho de compras azul"/>
          </Link>
        </StyledNav>
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

const StyledNav = styled.nav`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 80px;

  & img{
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;