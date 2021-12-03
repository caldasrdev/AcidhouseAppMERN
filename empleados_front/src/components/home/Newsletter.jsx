import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import React from "react";
import "./Newsletter.css"

const Container = styled.div`
  height: 60vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Boletín de Información</Title>
      <Desc>Suscribete para obtener todo nuestro contenido y nuestros descuentos.</Desc>
      <InputContainer id="input-name">
        <Input placeholder="Ingresa tu nombre" />
      </InputContainer>
      <InputContainer id="input-email">
        <Input placeholder="Ingresa tu email o correo electrónico" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
