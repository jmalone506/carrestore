import React, { Component} from "react";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/Carousel"



export class Cars extends Component {
  
  
render(){
  return (
    <div>
      <Navbar></Navbar>
     
          <CarouselIMG />
        

    </div>
  );
}
}
export default Cars;


