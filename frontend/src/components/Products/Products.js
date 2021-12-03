import React from "react";
import {  Container } from "react-bootstrap";
import CardsMen from "./products_men/CardsMen";
import CardsWomen from "./products_women/CardsWomen";

export default class Contact extends React.Component {
    constructor(props) {
    super(props);
    this.state = {

    };
}

    render() {
        return (
        <Container >
            <CardsMen />
            <CardsWomen />
        </Container>
    );
}
}
