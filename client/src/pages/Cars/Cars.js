import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/Carousel"
import Quotes from "../../components/Quotes/Quotes"
import HomeCards from "../../components/Cards/HomeCards.js"

function Cars() {


  return (
    <div>
      <Navbar />
      <CarouselIMG />


 
      <Quotes />


        <HomeCards />

     
     
    </div>
  );

}
export default Cars;


