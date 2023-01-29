import styled from "styled-components";

export default function Sales() {
    return (
        <Container>
            <Column line={true}>
                <Subtitle>Resumo da Compra</Subtitle>
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
    padding: 0 0 0 70px;
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