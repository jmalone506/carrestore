import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/Carousel"
import HomeSection1 from "../../components/HomeSection1/"


export class Cars extends Component {


  render() {
    return (
      <div>
        <Navbar />
        <CarouselIMG />
        <HomeSection1 />

      </div>
    );
  }
}
export default Cars;


