import React from "react";
import HornedBeast from "./HornedBeast";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';



class Main extends React.Component{

   
      

render(){

    return(
    <>
    
        



        <div>
            <Row xs={1} md={3} className="g-4">
        {
            
            this.props.dataAn.map((ele)=>
            <Col>
            <HornedBeast title={ele.title}  url={ele.image_url} desc={ele.description} />
            </Col>
            )
            
        }
                </Row>
        </div>
        </>
    );

}};

export default Main;