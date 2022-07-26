import React from "react";
import HornedBeast from "./HornedBeast";
import Data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {favorite: 0}
      }

      handleClick=()=>{
        this.setState({favorite:this.state.favorite + 1});
      }

render(){

    return(

        
        <div>
            <Row xs={1} md={3} className="g-4">
        {
            
            Data.map((ele)=>
            <Col>
            <HornedBeast title={ele.title}  url={ele.image_url} desc={ele.description} onClick={this.handleClick}/>
            </Col>
            )
            
        }
                <span>`nuper of favorie= ${this.favorite}❤` =</span>
                </Row>
        </div>
       
    )
};

}

export default Main;