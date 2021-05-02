import React, { Component } from "react";

import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/Carousel"
import HomeSection1 from "../../components/Section/HomeSection1"


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


