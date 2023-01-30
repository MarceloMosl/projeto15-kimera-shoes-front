import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const navigator = useNavigate();

  async function cadastrar(e) {
    e.preventDefault();
    const body = {
      name,
      lastName,
      email,
      password,
      confirmPassword,
      street,
      number,
      city,
      state,
    };

    try {
      await axios.post("https://kimera-shoes.onrender.com/cadastro", body);
      navigator("/");
    } catch (error) {
      console.error("Erro ao cadastrar");
      console.log(error);
    }
  }

  return (
    <Main>
      <div className="colunaEsquerda">
        <form>
          <h2>Dados pessoais</h2>
          <input
            type="text"
            placeholder="nome"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            placeholder="sobrenome"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
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
          <input
            type="password"
            placeholder="confirme a senha"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          <br />
        </form>
      </div>
      <div className="line"></div>
      <form>
        <div className="colunaDireita">
          <h2>Endereço</h2>
          <input
            type="text"
            placeholder="rua"
            onChange={(e) => setStreet(e.target.value)}
          ></input>
          <br />
          <input
            type="number"
            placeholder="número"
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            placeholder="cidade"
            onChange={(e) => setCity(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            placeholder="estado"
            onChange={(e) => setState(e.target.value)}
          ></input>
          <br />
          <button type="submit" onClick={cadastrar}>
            Cadastrar
          </button>
          <p>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
          </p>
        </div>
      </form>
    </Main>
  );
}
const Main = styled.div`
  width: 60vw;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
