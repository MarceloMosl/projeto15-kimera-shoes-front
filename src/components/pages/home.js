import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";
import botaPng from "../../assets/imgs/image 1.png";
import chineloPng from "../../assets/imgs/image 2.png";
import chuteiraPng from "../../assets/imgs/image 3.png";
import sapatilhaPng from "../../assets/imgs/image 4.png";
import sapatenisPng from "../../assets/imgs/image 5.png";
import casualPng from "../../assets/imgs/image 6.png";
import corridaPng from "../../assets/imgs/image 7.png";
import academiaPng from "../../assets/imgs/image 8.png";

export default function Home() {
  const [prods, setProds] = React.useState([]);
  const categories = [
    { cat: "Bota", img: botaPng },
    {
      cat: "Chinelo",
      img: chineloPng,
    },
    {
      cat: "Chuteira",
      img: chuteiraPng,
    },
    {
      cat: "Sapatilha",
      img: sapatilhaPng,
    },
    {
      cat: "Sapatenis",
      img: sapatenisPng,
    },
    {
      cat: "Casual",
      img: casualPng,
    },
    {
      cat: "Corrida",
      img: corridaPng,
    },
    {
      cat: "Academia",
      img: academiaPng,
    },
  ];

  useEffect(() => {
    const promise = axios.get("https://kimera-shoes.onrender.com/produtos");

    promise.then((res) => setProds(res.data));
    promise.catch((err) => console.log(err.response.data));
  }, []);

  function getProdByCategory(category) {
    const promise = axios.get(
      `https://kimera-shoes.onrender.com/produtos?category=${category}`
    );
    promise.then((res) => console.log(res.data));
    promise.catch((err) => console.log(err));
  }

  return (
    <div>
      <Main>
        {categories.map((v) => {
          return (
            <Types onClick={() => getProdByCategory(v.cat)}>
              <img src={v.img} alt={v.cat} />
              <p>{v.cat}</p>
            </Types>
          );
        })}
      </Main>

      <h1>Todos</h1>

      {prods.map((v) => {
        return (
          <All>
            <img src={v.img} alt={v.cat} />
            <div>
              <section>
                {v.title} <br />
                <br />
                {v.desc}
              </section>
            </div>
            <div>
              <p>R$ {v.price.toFixed(2)}</p>
            </div>
          </All>
        );
      })}
    </div>
  );
}
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  width: 1000px;
  gap: 60px;
`;
const Types = styled.div`
  img {
    background-color: #a9acc9;
    width: 160px;
    height: 160px;
    cursor: pointer;
    border-radius: 6px;
  }
  p {
    font-style: italic;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
  }
  p:hover {
    text-decoration: underline;
  }
`;
const All = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  padding: 20px;
  font-size: 35px;
  text-align: center;
  background-color: white;
  img {
    width: 250px;
    height: 250px;
    border-radius: 5px;
  }
  span {
    margin-left: 200px;
  }
  section {
    width: 500px;
  }
`;
