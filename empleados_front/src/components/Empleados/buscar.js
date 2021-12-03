import React from 'react';
import { Container, Row, Button, Form } from 'react-bootstrap';
import '../Empleados/Empleados.css';
import Datagrid from '../grid/grid';
import ConfirmationPrompts from '../prompts/confirmation';
import { request } from '../helper/helper';
import Loading from '../loading/loading';

const columns = [{
  dataField: 'id',
  text: 'Empleado ID',
  hidden: true, 
},
    {
  dataField: 'nombre',
  text: 'Nombre'
    },
    {
  dataField: 'apellido',
  text: 'Apellido'
    },
    {
  dataField: 'tDocumento',
  text: 'Tipo de Doc.'
    },
    {
  dataField: 'nDocumento',
  text: 'Número de Doc.'
    },  
    {
  dataField: 'genero',
  text: 'Gén.'
    },
    {
  dataField: 'edad',
  text: 'Edad'
    },
    {
  dataField: 'direccion',
  text: 'Dirección'
    },
    {
  dataField: 'municipio',
  text: 'Mpio.'
    },
    {
  dataField: 'departamento',
  text: 'Dpto.'
    },
    {
  dataField: 'zpostal',
  text: 'Zona Postal'
    },
    {
  dataField: 'email',
  text: 'Email'
    },
    {
  dataField: 'telefono',
  text: 'Télefono'
    },

];

export default class EmpleadosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idEmpleado: null,
      confirmation: {
        title: 'Eliminar empleado',
        text: ' ¿Desea eliminar un empleado?',
        show: false,
      },
      message: {
        text: '',
        show: false,
      },
    };

    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    }

  componentDidMount() { }
  
  onClickEditButton(row) {
 
    this.props.setIdEmpleado(row._id);
    this.props.changeTab('editar');
    }
    

    onClickDeleteButton(row) {
      // this.props.setIdEmpleado(row._id);
      // this.props.changeTab('eliminar');
      this.setState({
        confirmation: {
          idEmpleado:row._id,
          ...this.state.confirmation,
          show: true,
        },
      });
    }
  
    onCancel() {
      this.setState({
        confirmation: {
          ...this.state.confirmation,
          show: false,
        },
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
        this.eliminarEmpleado()
      );
    }
  
    eliminarEmpleado() {
      this.setState({ loading: true });
      request
        .delete(`/empleado/${this.state.idEmpleado}`)
        .then((response) => {
          this.setState({
            loading: false,
            message: {
              text: response.data.msg,
              show: true,
            },
          });
           this.setState({ loading: false });
          // if (response.data.exito) window.location.reload();
          if (response.data.exito) this.reLoadPage();
        })
        .catch((err) => {
          console.error(err);
          this.setState({ loading: false });
        });
    
  }
  
    reLoadPage() {
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    }
    
  render() {
    return (
      <Container id="empleados-buscar-container">
        <ConfirmationPrompts
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          duration={1000}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
          <Row>
          <h> Buscar empleados </h>
          </Row>
          <Row>
          <Datagrid url='/empleados'
            columns={columns}
            showEditButton={true}
            showDeleteButton={true}
            onClickEditButton={this.onClickEditButton}
            onClicDeleteButton={this.onClicDeleteButton}
          />
          </Row>
        <Form>
          <Button
            style={{ "background-color": '#8b0000', "border-color": '#8b0000' , "margin-top": 60}}
            href="/dashboard">Regresar
          </Button>
        </Form>
      </Container>
        );
    }
}