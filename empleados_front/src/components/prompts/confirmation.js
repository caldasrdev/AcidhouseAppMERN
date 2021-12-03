import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { isUndefined, isNull } from 'util';

export default class ConfirmationPrompts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: '',
            text: '',
        };
    }

    componentWillReceiveProps(nextProps) {
        
        if (nextProps.show)
            this.setState({ show: true }, this.hideMessage());

                // show: nextProps.show,
                // title: nextProps.title,
                // text: nextProps.text
            // });
    }

    hideMessage() {
        setTimeout(() => {
            this.setState({ show: false });
        }, this.props.duration);
    }

    onExited() {
        if (!isUndefined(this.props.onExited) && !isNull(this.props.onExited))
            this.props.onExited();
    }

    render() { 
        return (
            <Modal style={{
                "display": 'flex',
                "alingn-items": 'center'}} 

                centered
                show={this.state.show}
                onExited={()=> this.onExited()}
                onHide={() => this.props.onCancel()}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {this.props.text}
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" 
                     onClick={() => this.props.onCancel()}
                    >Cancelar</Button>
                    <Button variant="primary" style={{ "background-color": '#8b0000', "border-color": '#8b0000' }}
                      onClick={() => this.props.onConfirm()}
                    >Confirmar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
 