import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import ProveedoresBuscar from './buscar';
import ProveedoresCrear from './crear';
import ProveedoresEditar from './editar';
import '../Proveedores/Proveedores.css';



export default class Proveedores extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "buscar",
            _id: null,
        };

        this.changeTab = this.changeTab.bind(this)
        this.setIdProveedor =this.setIdProveedor.bind(this)
        this.getIdProveedor =this.getIdProveedor.bind(this)
    }

    changeTab(tab) {
        this.setState({ currentTab: tab });
}
    
    setIdProveedor(id){
        this.setState ({ _id: id});
    }

    getIdProveedor (){
        return this.state._id;
    }

    render() { 
        return (
            <Container id= "proveedors-buscar-container" >
                <Row>
                    <Nav fill variant="tabs" defaultActiveKey="/buscar"
                        onSelect={(eventKey) =>
                            // console.log(eventKey)
                            this.setState({ currentTab: eventKey })}
                    >
                    <Nav.Item>
                    <Nav.Link eventKey="buscar" style={{ color: "#8b0000" }}>Buscar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="crear" style={{ color: "#8b0000" }}>Crear</Nav.Link>
                    </Nav.Item>
  
                    </Nav>
                    <Row>
                        {this.state.currentTab === "buscar" ? (
                            <ProveedoresBuscar
                                changeTab={(this.changeTab)}
                                setIdProveedor={this.setIdProveedor}
                            />
                        ) : this.state.currentTab === "crear"? (                            
                                <ProveedoresCrear
                                    changeTab={(tab) => this.changeTab(tab)} />
                        ) : (
                                <ProveedoresEditar
                                    changeTab={(this.changeTab)}
                                    getIdProveedor={this.getIdProveedor}
                                />
                        )}
                    </Row>
                </Row>
            </Container>

         );
    }
};
