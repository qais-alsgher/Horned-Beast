
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class ModalCar extends React.Component{
constructor(props){
  super(props);
  this.state={
    show:false,
    favorite:0
  }
}
handleClose = () => {
 this.props.handleClose();
    
}

handleShow = () => {
  this.props.handleShow();
      }
 

 handleClick=()=>{
  this.props.handleClick();
}



render(){

return(
<>
<Modal show={this.props.show} onHide={this.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Horned HornedBeast</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Card style={{ width: '18rem' }} onClick={this.handleClick}>
      <Card.Img variant="top" src={this.props.url} />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.desc} <span>{this.props.favorite}❤</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={this.handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>

</>

)

}
}

export default ModalCar;
