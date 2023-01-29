import styled from "styled-components";
import { products } from "../mock";

export default function Sales() {

    return (
        <Container>
            <Column line={true}>
                <Subtitle>Resumo da Compra</Subtitle>
                {/* {
                    products.map(p => {
                        return (
                            <ProductCard key={p._id}>
                                <ProductImage src={p.img} />
                                <div>
                                    <Text>{p.title}</Text>
                                    <Text>{`Tamanho 43`}</Text>
                                    <Text>{`R$ ${Number(p.price).toFixed(2)}`}</Text>
                                </div>
                            </ProductCard>
                        )
                    })
                } */}
            </Column> 
            <Column>
                <Subtitle>Formas de Pagamento</Subtitle>
                <Text>{`Valor Total R$100,00`}</Text>
                <StyledForm>
                    <StyledLabel>
                        <StyledRadio name="forma_pagamento" type="radio" />
                        Boleto bancário
                    </StyledLabel>
                    <StyledLabel>
                        <StyledRadio name="forma_pagamento" type="radio" />
                        Cartão de crédito
                    </StyledLabel>
                    <StyledLabel>
                        <StyledRadio name="forma_pagamento" type="radio" />
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