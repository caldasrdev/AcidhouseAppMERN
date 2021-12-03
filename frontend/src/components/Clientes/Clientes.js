import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import ClientesBuscar from './buscar';
import ClientesCrear from './crear';
import ClientesEditar from './editar';
import '../Clientes/Clientes.css';



export default class Clientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "buscar",
            _id: null,
        };

        this.changeTab = this.changeTab.bind(this)
        this.setIdCliente =this.setIdCliente.bind(this)
        this.getIdCliente =this.getIdCliente.bind(this)
    }

    changeTab(tab) {
        this.setState({ currentTab: tab });
}
    
    setIdCliente(id){
        this.setState ({ _id: id});
    }

    getIdCliente (){
        return this.state._id;
    }

    render() { 
        return (
            <Container id= "clientes-buscar-container" >
                <Row>
                    <Nav fill variant="tabs" defaultActiveKey="/buscar"
                        onSelect={(eventKey) =>
                            // console.log(eventKey)
                            this.setState({ currentTab: eventKey })}
                    >
                    <Nav.Item>
                    <Nav.Link eventKey="buscar" style={{ color: "#000000" }}>Buscar</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="crear" style={{ color: "#000000" }}>Crear</Nav.Link>
                    </Nav.Item>
  
                    </Nav>
                    <Row>
                        {this.state.currentTab === "buscar" ? (
                            <ClientesBuscar
                                changeTab={(this.changeTab)}
                                setIdCliente={this.setIdCliente}
                            />
                        ) : this.state.currentTab === "crear"? (                            
                                <ClientesCrear
                                    changeTab={(tab) => this.changeTab(tab)} />
                        ) : (
                                <ClientesEditar
                                    changeTab={(this.changeTab)}
                                    getIdCliente={this.getIdCliente}
                                />
                        )}
                    </Row>
                </Row>
            </Container>

         );
    }
};
