import { useState } from "react";
import styled from "styled-components";

export default function Sales() {
    const [paymentMethod, setPaymentMethod] = useState("boleto");

    return (
        <Container>
            <Column line={true}>
                <Subtitle>Resumo da Compra</Subtitle>
                <ProductCard>
                    <div>
                        <Text>Não há produtos no carrinho</Text>
                    </div>
                </ProductCard>
            </Column> 
            <Column>
                <Subtitle>Formas de Pagamento</Subtitle>
                <Text>{`Valor Total R$100,00`}</Text>
                <StyledForm>
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