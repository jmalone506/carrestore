import React, { Component } from "react";
import { Col, Row, Container } from "../../component/Grid";
import CreatePostForm from "../../components/CreatePosstForm";
import PostsList from "../../components/PostsList";


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
              <CreatePostForm />
            </Col>
            <Col size="md-6 sm-12">
              <PostsList />
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}
export default Cars;


