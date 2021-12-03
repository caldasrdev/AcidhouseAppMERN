import React from 'react';
import {Container} from 'react-bootstrap'
import '../../components/quienes_somos/quienes_somos.css'

export default class QuienesSomos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (
        <Container>
        <div >
            <div class="text-bg">
                <h1>PLAN ESTRATÉGICO</h1>
                <h2>MISIÓN</h2>
                <p> Diseñar, fabricar y comercializar ropa casual y de calidad a nivel nacional a través de la innovación con los mejores materiales además de ser amigable con el medio ambiente. Con el propósito de transmitir nuestro estilo e imagen para lograr la comodidad y satisfacción de nuestro cliente final al mejor precio.</p>
                <h2>VISIÓN</h2>
                <p> En el año 2025 llegar a ser reconocidos a nivel nacional a través de las redes sociales por nuestros productos, calidad, diseños y servicios ofrecidos además de ser amigable con el medio ambiente. </p>
                <h2>VALORES</h2>
                <h3 id="h3p">Respeto: </h3>
                <p id="h3p">Tenemos una actitud de comprensión del ser de los demás y nos comportamos con cordura y tolerancia en las situaciones que se nos presentan.</p>
                <h3 id="h3p">Compromiso: </h3>
                <p id="h3p">Cumplimos con las obligaciones contraídas, con la palabra dada, con la fe empeñada y respondemos por los servicios ofrecidos.</p>
                <h3 id="h3p">Honestidad: </h3>
                <p id="h3p">Observamos normas y compromisos, actuamos con la verdad y somos consecuentes con lo que hacemos, lo que pensamos y lo que decimos.</p>
            </div>
        </div>    
        </Container>
        );
    }
}