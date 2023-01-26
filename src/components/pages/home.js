import axios from "axios";
import React, { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  const [prods, setProds] = React.useState([]);
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
        {prods.map((v) => {
          return (
            <Types onClick={() => getProdByCategory(v.cat)}>
              <img src={v.img} alt={v.cat} />
              <p>{v.cat}</p>
            </Types>
          );
        })}
      </Main>
    </div>
  );
}
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  margin: auto;
  width: 600px;
`;
const Types = styled.div`
  img {
    background-color: white;
    width: 120px;
    height: 120px;
    cursor: pointer;
    border-radius: 6px;
  }
  p {
    font-style: italic;
    font-size: 25px;
    font-weight: 700;
    cursor: pointer;
  }
`;
