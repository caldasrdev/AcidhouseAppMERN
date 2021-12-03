import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../helper/helper';
import Loading from '../loading/loading';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';
import ConfirmationPrompts from '../prompts/confirmation';
import '../Empleados/Empleados.css';

export default class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idEmpleado: this.props.getIdEmpleado(),
            rediret: false,
            message: {
                text: '',
                show: false, 
            },

            confirmation: {
                title: 'Modificar empleado',
                text: '¿Desea Modificar el empleado?',
                show: false,
            },

            loading: false,
            empleado: {
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
        this.getEmpleado();
    }


    getEmpleado() {
        this.setState({ loading: true });
        request
            .get(`/empleados/${this.state.idEmpleado}`)
            .then((response) => {
                this.setState({
                    empleado: response.data,
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
            empleado: {
                ...this.state.empleado,
                    [index]: value, 
            },
        })
    }
    guardarempleados() {
        this.setState({ loading: true });
        request
            
            .put(`/empleados/${this.state.idEmpleado}`, this.state.empleado)
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
                    this.guardarEmpleados()
                );
            
            }
    render() {
        return (

            <Container id="empleados-editar-container" >

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
                        Editar Empleado
                    </h2>
                </Row>
                <form class="formulario" action="#" method="POST">

                    <legend>Editar cambios en los registros de empleado</legend>

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
                        >Editar Empleado
                    </Button>

                </div>
                </form>
                
              

           </Container >
           
    )  
    } 

}
