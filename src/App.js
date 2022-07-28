
import './App.css';
import React from 'react';
import Header from './component/header';
import Footer from  './component/footer';
import Main from './component/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Data from './component/data.json';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={

        numperHourn:"",
        dataAn:Data
    }
}

handleSubmit=(e)=>{
    e.preventDefault();
    this.state={
      numperHourn:e.target.value
    }
    this.setState({
      dataAn:Data.filter((ele)=>ele.horns===+this.state.numperHourn)
    })
  }

  render(){
    return(
      <>
      
      <div className="App">
      <Header />
<>

      <Form onChange={this.handleSubmit}>
        <Form.Label htmlFor="numperHourn">pls select numper of Horned</Form.Label>
        <Form.Select id="numperHourn" >
          <option value="1">1 Horned</option>
          <option value="2">2 Horned</option>
          <option value="3">3 Horned</option>
          <option value="4">4 Horned</option>
        </Form.Select>
       
        </Form> 

</>


      <Main dataAn={this.state.dataAn}/>
      <Footer />
      </div>
      </>
    )

  }
  
};

export default App;
