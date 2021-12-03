import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./contact.css";

export default class Contact extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
    };
}

    render() {
        return (
        <Container id="contacto-container">
            <Row>
                <Col>
                <Row>
                <h2> Contáctanos</h2>
                </Row>

            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                    <Form.Label>Nombres</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese sus nombres" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese sus apellidos" />
                </Form.Group>
            </Row>

                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                </Form.Group>             

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su ciudad de estadía"/>
                </Form.Group>             

                <Form.Group as={Col} >
                    <Form.Label>Telefóno</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese su número telefónico"/>
                </Form.Group>
                
            </Row>

            <Button id="button" variant="primary" type="submit">
                Enviar
            </Button>
            </Form>
        </Col>
        </Row>
    </Container>
    );
}
}
