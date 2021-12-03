import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../helper/helper';
import Loading from '../loading/loading';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';
import ConfirmationPrompts from '../prompts/confirmation';
import '../Proveedores/Proveedores.css';

export default class ProveedoresEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idProveedor: this.props.getIdProveedor(),
            rediret: false,
            message: {
                text: '',
                show: false, 
            },

            confirmation: {
                title: 'Modificar proveedor',
                text: '¿Desea Modificar el proveedor?',
                show: false,
            },

            loading: false,
            proveedor: {
                nombre:"",
                apellido:"",
                tDocumento:"",
                nDocumento:"",
                genero:"",
                edad:"",
                direccion:"",
                municipio:"",
                departamento:"",
                zpostal:"",
                email:"",
                telefono:"",
            }
        };

this.onCancel= this.onCancel.bind(this);
this.onConfirm= this.onConfirm.bind(this);
}

    componentDidMount() {
        this.getProveedor();
    }


    getProveedor() {
        this.setState({ loading: true });
        request
            .get(`/proveedores/${this.state.idProveedor}`)
            .then((response) => {
                this.setState({
                    proveedor: response.data,
                    loading:false,
                })
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
}

    setValue(index, value) {
        this.setState ({
            proveedor: {
                ...this.state.proveedor,
                    [index]: value, 
            },
        })
    }
    guardarproveedores() {
        this.setState({ loading: true });
        request
            
            .put(`/proveedores/${this.state.idProveedor}`, this.state.proveedor)
            .then((response) => {
                if (response.data.exito) {
                    this.setState({
                        rediret: response.data.exito,
                        message: {
                            text: response.data.msg,
                            show: true
                        },
                    });
                    // this.props.changeTab('buscar');
                }
                this.setState({ loading: false })
                // console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
}


            onCancel() {
                this.setState({
                    confirmation: {
                        ...this.state.confirmation,
                        show: false,
                    }
                });
            }

            onConfirm() {
                this.setState(
                    {
                        confirmation: {
                            ...this.state.confirmation,
                            show: false,
                        },
                    },
                    this.guardarProveedores()
                );
            
            }
    render() {
        return (

            <Container id="proveedores-editar-container" >

                <ConfirmationPrompts
                    show={this.state.confirmation.show}
                    title={this.state.confirmation.title}
                    text={this.state.confirmation.text}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}

                />

                <Loading show={ this.state.loading } />
                <Row>
                    <h2>
                        Editar Proveedor
                    </h2>
                </Row>
                <form class="formulario" action="#" method="POST">

                    <legend>Editar cambios en los registros de proveedor</legend>

                    <div class="contenedor de campos">

                    <div class="campo">
                        <label >Nombre</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('nombre', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Apellido</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('apellido', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Tipo de Documento</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('tDocumento', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Número de Documento</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('nDocumento', e.target.value)}
                            />
                    </div>
                    <h4> </h4>
                    <h4>Otros datos</h4>
                    <div class="campo">
                        <label>Género</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('genero', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Teléfono</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('telefono', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Edad</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('edad', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Dirección</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('direccion', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Ciudad o Municipio</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('municipio', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Departamento</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('departamento', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Zona Postal</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('zpostal', e.target.value)}
                            />
                    </div>
                    <div class="campo">
                        <label>Email</label>
                            <Form.Control
                                onChange = {(e) => this.setValue('email', e.target.value)}
                            />
                    </div>                     
                   
                   
                    <Button
                        variant="primary"
                        style={{"background-color": '#8b0000', "border-color": '#8b0000' }}
                        onClick={() =>
                            this.setState({
                                confirmation: { ...this.state.confirmation, show:true},
                            })
                        }
                        >Editar Proveedor
                    </Button>

                </div>
                </form>
                
              

           </Container >
           
    )  
    } 

}
