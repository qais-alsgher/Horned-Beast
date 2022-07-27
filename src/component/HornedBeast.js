import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import MadalCar from './mdalCar';


class HornedBeast extends React.Component{

    constructor(props){
        super(props);
        this.state={
            show:false ,
            favorite: 0
        }

    }
    handleClose = () => {
        this.setState({
            show:false
    
        })
      }

      handleShow = () => {
        this.setState({
            show:true
    
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
          {this.props.desc}<span>{this.state.favorite}❤</span>
         </Card.Text>
        </Card.Body>
         </Card>
          <MadalCar 
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          handleClick={this.handleClick}
          url={this.props.url}
          title={this.props.title}
          this={this.props.desc}
          />
      </>

        )

}
}


export default HornedBeast;