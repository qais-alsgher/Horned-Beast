import React  from 'react';
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
        <Card style={{ width: '18rem' }}  onClick={this.handleClick} >
        <Card.Img variant="top" src={this.props.url} onClick={this.handleShow}/>
        <Card.Body>
         <Card.Title>{this.props.title}</Card.Title>
         <Card.Text>
          {this.props.desc}
         </Card.Text>
         <span>{this.state.favorite}❤</span>
        </Card.Body>
         </Card>
          <MadalCar 
          handleClose={this.handleClose}
          handleShow={this.handleShow}
          handleClick={this.handleClick}
          url={this.props.url}
          title={this.props.title}
          desc={this.props.desc}
          show={this.state.show}
          favorite={this.state.favorite}
          />
      </>

        )

}
}


export default HornedBeast;