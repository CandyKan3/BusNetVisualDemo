import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Logo from './cci.png'
export default class Header extends Component{
  state = {

  }
  constructor(props) {
  super(props)
  this.state = { isEmptyState: true }
}
triggerAddTripState = () => {
  this.setState({
    ...this.state,
    isEmptyState: false,
    isAddTripState: true
  })
}
triggerNotTripState = () => {
  this.setState({
    ...this.state,
    isEmptyState: true,
    isAddTripState: false
  })
}
  render(){
    return (
      <div>

      <Container>



  <Row >
   <Col md={{ span: 8 }} >
   <div >
    <Card className = "mt-5" >
    <Card.Body>
    <br></br>
    <h1>Bus Net Live Demo</h1>
    <p> Created By: Tyler Crowe, Bryce Kane, Bonaventure Raj </p>
    </Card.Body>
</Card>

</div>
    </Col>
    <Col sm={4}><img width={300} src = {Logo}height={300} /></Col>

  </Row>

  <Row>

  </Row>
</Container>
<Card>
<Card.Body>
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"

    alt="Generic placeholder"
  />
  <Media.Body>
    <h3>About this Demo</h3>
    <p>
      This demo was created to measure error in the GPS System at the University of North Carolina at Charlotte.
    </p>
  </Media.Body>
</Media>

</Card.Body>
</Card>


      </div>
    )
  }
}
