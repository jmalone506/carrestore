import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/Carousel"



function Cars() {
  

  return (
    <div>
      <Navbar />
      <CarouselIMG />

      <Container fluid>
      
      </Container>

    </div>
  );

}
export default Cars;


