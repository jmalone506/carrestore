import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/Carousel"
import Quotes from "../../components/Quotes/Quotes"


function Cars() {


  return (
    <div>
      <Navbar />
      <CarouselIMG />

      <Container fluid>

        <Quotes />

      </Container>

    </div>
  );

}
export default Cars;


