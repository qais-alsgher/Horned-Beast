

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';



    

class HornedBeast extends React.Component{

    constructor(props){
        super(props);
        this.state={
            show:false,
            favorite: 0
        }

    }
    // constructor(props){
    //     super(props);
    //     this.state = {favorite: 0}
    //   }

    handleClose = () => {
        this.setState({
            show:!this.state.show
    
        })
      }

      handleShow = () => {
        this.setState({
            show:!this.state.show
    
        })
       }

       handleClick=()=>{
        this.setState({favorite:this.state.favorite + 1});
      }

render(){
return(
    <>
  
            {/* card component */}
        <Card style={{ width: '18rem' }} onClick={this.handleShow} >
        <Card.Img variant="top" src={this.props.url} />
        <Card.Body>
         <Card.Title>{this.props.title}</Card.Title>
         <Card.Text>
          {this.props.desc}<span>{this.state.favorite}❤=</span>
         </Card.Text>
         <Button variant="primary">Go somewhere</Button>
        </Card.Body>
         </Card>
         {/* modal component */}
    <Modal show={this.state.show} onHide={this.handleClose}>
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
        <span>{this.state.favorite}❤=</span>
      </Card.Body>
    </Card>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={this.handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={this.handleClick}>
        Add to favorite
      </Button>
    </Modal.Footer>
  </Modal>
</>

        )

}
}


export default HornedBeast;