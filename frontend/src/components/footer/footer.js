import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  import imagenes from '../assets/imagenes.js';              
  import {Col, Row} from 'react-bootstrap'
  import React from "react";
                    
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 35px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 20px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  `;

  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>
          <img src={imagenes.Logocorporativo}
                                justify="content-between"
                                width="150"
                                height="150"
                                alt=""/>
          </Logo>
          <Desc>
          Marca de ropa colombiana especilizada en Street-Wear
          </Desc>
          <SocialContainer>

            <li>
              <a href="https://www.facebook.com/acidhouseco" target="blank">
              <SocialIcon color="000000">
              <Facebook />
              </SocialIcon>
              </a>
            </li>

            <li>
              <a href="https://www.Instagram.com/acidhouseco" target="blank">
              <SocialIcon color="000000">
              <Instagram />
              </SocialIcon>
              </a>
            </li>

            <li>
              <a href="https://www.Twitter.com/acidhouseco" target="blank">
              <SocialIcon color="000000">
              <Twitter />
              </SocialIcon>
              </a>
            </li>

            <li>
              <a href="https://www.Pinterest.com/"acidhouseco target="blank">
              <SocialIcon color="000000">
              <Pinterest />
              </SocialIcon>
              </a>
            </li>

          </SocialContainer>
        </Left>

        <Center>
        <Title>ASISTENCIA</Title>
          <Row>
            <Col>
            <ul class="social">
            <li>
              <a href="Home" target="blank">
              Home
              </a>
            </li>
            <li>
              <a href="Home" target="blank">
              Carrito
              </a>
            </li>
            <li>
              <a href="Home" target="blank">
              Fashion
              </a>
            </li>
            <li>
              <a href="Home" target="blank">
              Mi cuenta
              </a>
            </li>
            </ul>
          </Col>
          <Col>
            <ul class="social">
            <li>
              <a href="Home" target="blank">
              Mi cuenta
              </a>
            </li>
            <li>
              <a href="Home" target="blank">
              Tracking de la Orden
              </a>
            </li>
            <li>
              <a href="Home" target="blank">
              Lista de deseos
              </a>
            </li>
            <li>
              <a href="Home" target="blank">
              Términos y Condiciones
              </a>
            </li>
            </ul>
          </Col>
          </Row>
        </Center>
        <Right>
          <Title>INFORMACIÓN DE LA EMPRESA</Title>
          <ContactItem>
            <Room style={{marginRight:" 10px"}}/> Carrera 9 #57-35 Tunja Colombia 
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +57 3133822370
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> acid_hs666@gmail.com
          </ContactItem>
        </Right>
      </Container>
    );
  };
  
  export default Footer;
  