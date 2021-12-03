import React from 'react';
import {Container} from 'react-bootstrap'
import CardsDashboard from './CardsDashboard';



export default class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
     
    }
    render() { 
        return ( 
            <Container>
            
 

            <CardsDashboard />

            </Container>
            );
    }
}  
     

