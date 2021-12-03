import React from 'react';
import Products from "../Products/Products"
import Categories from  '../home/Categories' 
import { Container } from 'react-bootstrap';
import '../Product/Product.css'

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
     
    }
    render() { 
        return ( 
            
            <Container>
                <h1>Página en construcción</h1>
                <Categories />
                <Products />
            </Container>


            );
    }
}  
     
