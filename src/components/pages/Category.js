import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Category({ userInt, setProdInt }) {
  const navigate = useNavigate();
  return (
    <div>
      <Title>{userInt[0].cat.toUpperCase()}</Title>

      <List>
        {userInt.map((v) => {
          return (
            <All
              onClick={() => {
                setProdInt(v);
                navigate("/buyScreen");
              }}
            >
              <img src={v.img} alt={v.title} />
              <div>
                <section>{v.title}</section>
              </div>
            </All>
          );
        })}
      </List>
    </div>
  );
}
const Title = styled.h1`
  font-family: "Roboto";
  font-size: 55px;
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const All = styled.div`
  display: flex;
  font-family: "Roboto";
  justify-content: space-between;
  margin: auto;
  width: 300px;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 20px;
  gap: 5px;
  padding: 20px;
  font-size: 20px;
  background-color: white;
  cursor: pointer;
  img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
  }
`;
