import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../context/UserContext";

export default function Sales() {
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("boleto");
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const {user} = useContext(UserContext);

    useEffect(() => {
        async function getProductsOnCart() {
            const config = {
                headers: {
                    authorization: `Bearer ${user.token}` 
                }
            };
    
            try{
                const cart = await axios.get("https://kimera-shoes.onrender.com/carrinho", config);
                setProducts(cart.data);

                let newPrice = 0;
                cart.data.forEach(p => {
                    newPrice = newPrice + Number(p.price);
                });

                setTotalPrice(newPrice);
            }catch(error){
                console.log(`Sales Error: ${error.message}`);
            }
        }

        getProductsOnCart();
    }, []);

    async function buyProducts(form){
        form.preventDefault();
        if(!user) return navigate("/");

        const config = {
            headers:{
              authorization: `Bearer ${user.token}`
            }
        };

        const data = {
            products,
            totalPrice
        }

        try {
            await axios.post("https://kimera-shoes.onrender.com/sales", data, config);
            alert("Produtos Comprados com Sucesso!");
            navigate("/home");
        } catch (error) {
            console.log(error);
            alert("Desculpe! Parece que ocorreu um erro ao finalizar a compra! Por favor tente novamente mais tarde.");
        }
    }

    return (
        <Container>
            <Column line={true}>
                <Subtitle>Resumo da Compra</Subtitle>
                {products.length > 0 ?
                    products.map(p => {
                        return (<ProductCard key={p._id}>
                            <ProductImage src={p.image} />
                            <div>
                                <Text>{p.title}</Text>
                                <Text>Tamanho {p.size}</Text>
                                <Text>R$ {Number(p.price).toFixed(2)}</Text>
                            </div>
                        </ProductCard>)
                    })
                    :
                    <ProductCard>
                        <div>
                            <Text>Não há produtos no carrinho</Text>
                        </div>
                    </ProductCard>
                }
            </Column> 
            <Column>
                <Subtitle>Formas de Pagamento</Subtitle>
                <Text>Valor Total R$ {totalPrice.toFixed(2)}</Text>
                <StyledForm onSubmit={(e) => buyProducts(e)}>
                    <StyledLabel>
                        <StyledRadio name="forma_pagamento" type="radio" onChange={(e) => {setPaymentMethod(e.target.value)}} checked={paymentMethod === "boleto"} value="boleto"/>
                        Boleto bancário
                    </StyledLabel>
                    <StyledLabel>
                        <StyledRadio name="forma_pagamento" type="radio" onChange={(e) => {setPaymentMethod(e.target.value)}} checked={paymentMethod === "credito"} value="credito"/>
                        Cartão de crédito
                    </StyledLabel>
                    <StyledLabel>
                        <StyledRadio name="forma_pagamento" type="radio" onChange={(e) => {setPaymentMethod(e.target.value)}} checked={paymentMethod === "pix"} value="pix"/>
                        Pix
                    </StyledLabel>

                    <StyledSubmitButton type="submit" value="finalizar pedido" />
                </StyledForm>
            </Column>  
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    height: auto;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-right: ${props => props.line? "2px solid black" : "none"};
    box-sizing: border-box;
    padding: 0 30px 0 70px;
    width: calc(50% - 2px);
    background-color: #DBCCFA;
    
`;

const Subtitle = styled.span`
    font-size: 26px;
    margin-bottom: 50px;
`;

const Text = styled.span`
    font-size: 18px;
    margin-bottom: 25px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const StyledLabel = styled.label`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
    width: 100%;
    cursor: pointer;
`;

const StyledRadio = styled.input`
    margin-right: 10px;
    height: 15px;
    width: 15px;
`;

const StyledSubmitButton = styled.input`
    font-size: 20px;
    color: white;
    background-color: #2A7086;
    border: none;
    border-radius: 5px;
    padding: 2px;
    margin: none;
    height: auto;
    width: 375px;
    cursor: pointer;
`;

const ProductCard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    margin: 0 0 10px 0;
    border-radius: 5px;
    min-height: 150px;
    width: 100%;
    transition: border 1s;

    & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 25px 0 0 25px;
    }

    &:hover{
        border: 1px solid white;
    }
`;

const ProductImage = styled.img`
    object-fit: cover;
    height: auto;
    width: 150px;
`;