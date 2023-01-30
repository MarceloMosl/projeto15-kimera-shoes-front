// import axios from "axios";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function BuyProd({ prodInt }) {
  const sizes = [37, 38, 39, 40, 41, 42, 43, 44];
  const navigate = useNavigate();
  const [size, setSize] = React.useState("");

  const { user } = useContext(UserContext);

  async function addToCard(prod) {
    if (!user) return navigate("/login");
    if (size === "") return alert("Escolha um tamanho");

    const config = {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    };

    const data = {
      product_id: prodInt._id,
      quant: 1,
      size,
    };

    try {
      const res = await axios.post(
        "https://kimera-shoes.onrender.com/carrinho",
        data,
        config
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Main>
        <ImgProd>
          <img src={prodInt.img} alt="imagem do produto"></img>
        </ImgProd>

        <SpecsProd>
          <h1>{prodInt.title}</h1>
          <p>R${prodInt.price.toFixed()}</p>
          <span>Tamanhos</span>

          <SizeDiv>
            {sizes.map((a) => (
              <div
                onClick={() => {
                  setSize(a);
                }}
                style={
                  a === size
                    ? { backgroundColor: "#6d8aa5", color: "white" }
                    : {}
                }
              >
                {a}
              </div>
            ))}
          </SizeDiv>
          <End>
            <button
              onClick={() => {
                addToCard(prodInt);
              }}
            >
              Adicionar ao Carrinho
            </button>
            <button
              onClick={() => {
                navigate("/sales");
                addToCard(prodInt);
              }}
            >
              Ir para o carrinho
            </button>
          </End>
        </SpecsProd>
      </Main>
      <Footer>
        <div>
          <ion-icon name="logo-instagram"></ion-icon>
          Kimera_Shoes
        </div>
        <div>
          <ion-icon name="mail-outline"></ion-icon>
          CostumerService@kimerashoes.com
        </div>
      </Footer>
    </>
  );
}
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: auto;
  gap: 50px;
  font-family: "Roboto";
`;
const ImgProd = styled.div`
  img {
    width: 350px;
  }
`;
const SpecsProd = styled.div`
  padding: 20px;
  box-sizing: border-box;
  h1 {
    font-family: "Roboto";
    font-size: 55px;
    text-decoration: underline;
  }
  p {
    font-size: 50px;
  }
  span {
    font-size: 30px;
  }
`;

const SizeDiv = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 30px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    width: 50px;
    background: #a9acc9;
    border-radius: 10px;
    height: 50px;
    cursor: pointer;
    color: #2c2a86;
    font-family: "Inknut Antiqua";
  }
`;
const End = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 40px;

  button {
    background: #2a7086;
    border-radius: 5px;
    width: 283px;
    height: 78px;
    border: none;
    color: white;
    cursor: pointer;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    color: #2d9ec1;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
    gap: 5px;
  }
`;
