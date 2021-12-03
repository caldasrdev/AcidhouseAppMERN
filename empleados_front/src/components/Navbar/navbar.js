import React from 'react';
import { Navbar, Row, Nav, Container, Dropdown, DropdownButton, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import imagenes from '../assets/imagenes.js';
import './navbar.css';
import Announcement from '../../components/Navbar/Announcement.jsx';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
        <>

            <Navbar className="color_nav" sticky="top" id="navbar" expand="lg"  variant="dark" text="white" >
            
                <Container fluid="md">

            <Row>
                <Col>

                    <img src={imagenes.Logocorporativo}
                                justify="content-between"
                                width="50"
                                height="50" 
                                alt=""/>
                    <Navbar.Brand href="/home">Acid House Clothing
                        <span id="usuario sub-branm"></span>
                    </Navbar.Brand>                 

                </Col>
            </Row>                        
            <Row>
            <Col sm>

                    <Announcement /> 
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                            <Nav.Link href="/quienes_somos">Quienes Somos</Nav.Link>
                            <Nav.Link href="/terminos">Terminos y Condiciones</Nav.Link>
                            <Nav.Link href="/contact">Contáctenos</Nav.Link>       
                            
                    </Nav>
                    <DropdownButton id="dropdown-basic-button" title="Usuario" >
                        <Dropdown.Header id= "dropdown-header">
                            <Row>
                                <FontAwesomeIcon icon={faUserCircle} />
                            </Row>
                            <Row>
                                Admin
                            </Row>
                        </Dropdown.Header>
                        <Dropdown.Divider />
                        <Dropdown.Item href="/login"> Iniciar Sesión</Dropdown.Item>  
                        <Dropdown.Item href="/Dashboard"> Dashboard</Dropdown.Item>  
                        <Dropdown.Item onClick={()=> this.Logout} href="/Home"> Cerrar Sesión</Dropdown.Item>    
                    </DropdownButton>
                    </Navbar.Collapse>
            </Col>
            </Row>
            
                </Container>
            </Navbar>

        </>
        );
    }
}
 