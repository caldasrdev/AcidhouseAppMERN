import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class MessagePrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
             <Modal centered show={true}>
                <Modal.Body>
                    {
                        this.props.text
                    }
                </Modal.Body>

            </Modal>
        );
       
    }
}