import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/pages/login";
import Cadastro from "./components/pages/cadastro";
import Home from "./components/pages/home";

export default function App() {
  return (
    <>
      <h1>KimeraShoes</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
