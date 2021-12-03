import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
import { request } from '../helper/helper';
import Loading from '../loading/loading';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/jquery.mCustomScrollbar.min.css';
import '../Empleados/Empleados.css';


export default class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    setValue(index, value) {
        this.setState ({
            empleado: {
                ...this.state.empleado,
                    [index]: value, 
            },
        })
    }
    guardarEmpleados() {
        this.setState({ loading: true });
        request
            .post('/empleados', this.state.empleado)
            .then((response) => {
                if (response.data.exito) {
                    this.props.changeTab('buscar');
                }
                this.setState({ loading: false })
                // console.log(response.data);
            })
            .catch((err) => {
                console.error(err);
                this.setState({ loading: true });
            });
}
    render() {
        return (

            <Container id="empleados-crear-container" >
                <Loading show={ this.state.loading } />
                <Row>
                <legend>Creación de empleados</legend>


                </Row>
                <form class="formulario" action="#" method="POST">
                    <h2>
                        Procedimiento para agregar un registro de empleado a la base de datos.
                    </h2>
 
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
      
                    <div class="enviar">
                            <input class="boton" type="submit" value="Crear" onClick={() => console.log(this.guardarEmpleados())} />
                    </div>
                </div>
                </form>
              
                    <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12"></div>
                    <div class="text-bg"></div>
                    </div>
           </Container >
           
    )
    
    } 

}
