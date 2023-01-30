import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const navigator = useNavigate();

  async function entrar(e) {
    e.preventDefault();
    const body = { email, password };

    try {
      const {data} = await axios.post(
        "https://kimera-shoes.onrender.com/login",
        body
      );
      setUser(data);
      console.log(data);
      navigator("/home");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Main>
      <div className="coluna">
        <form>
          <h2>Já sou cliente</h2>
          <br />
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            type="password"
            placeholder="senha"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <button onClick={entrar}>Entrar</button>
        </form>
      </div>
      <div className="line"></div>
      <div className="coluna">
        <h2>Criar conta</h2>
        <button onClick={() => navigator("/cadastro")}>prosseguir</button>
      </div>
    </Main>
  );
}
const Main = styled.div`
  width: 60vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 80px;
  button {
    cursor: pointer;
  }
`;
