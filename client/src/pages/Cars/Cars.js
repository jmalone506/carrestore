import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";



import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/Carousel"



export class Cars extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <CarouselIMG />

        <Container fluid>
          <Row>
            <Col size="md-6">
          
            </Col>
            <Col size="md-6 sm-12">
            
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}
export default Cars;


