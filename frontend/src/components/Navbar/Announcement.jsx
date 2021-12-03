import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  fixed="top";
`;

const Announcement = () => {
  return <Container>¡Gran oferta! Envío gratis en pedidos superiores a $ 100.000 COP</Container>;
};

export default Announcement;
