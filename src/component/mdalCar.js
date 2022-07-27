
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import HornedBeast from './HornedBeast';

class ModalCar extends React.Component{

render(){

return(
<>
<Modal show={this.props.show} onHide={()=>this.props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>child</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.url} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.desc}
        </Card.Text>
        <span>{this.props.favorite}❤</span>
      </Card.Body>
    </Card>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={this.props.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={this.props.handleClick}>
        Add to favorite
      </Button>
    </Modal.Footer>
  </Modal>

</>

)

}}

export default ModalCar;
