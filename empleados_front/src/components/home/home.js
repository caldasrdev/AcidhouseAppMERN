
import React from 'react';
import Newsletter from './Newsletter.jsx'
import './home.css';
import Slider from './Slider'
import Banner from './Banner.js';
import CardsMen from '../Products/products_men/CardsMen.js';
import CardsWomen from '../Products/products_women/CardsWomen.js';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    render() { 
        return (
            <>
            
            <Slider />

            <div>
                <h1>Moda para él</h1>
            </div>
            <CardsMen />

            <Banner />
            <div>
                <h1>Moda para ella</h1>
            </div>
            <CardsWomen />

            <Newsletter />

            </>
            
        );
    }
}