import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"

function Cars() {


  return (
    <Container fluid>

      <Navbar></Navbar>
      <Row>
        <Col size="md-12">
          <h1>Welcome </h1>
         
          <Jumbotron>
            <h1>Image</h1>
          </Jumbotron>
        </Col>
      </Row>


      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>About Car Hacks</h1>
          </Jumbotron>

        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>About Car Hacks</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>About Car Hacks</h1>
          </Jumbotron>

        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>About Car Hacks</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>About Car Hacks</h1>
          </Jumbotron>

        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>About Car Hacks</h1>
          </Jumbotron>
        </Col>
      </Row>
      < Footer />
    </Container>
  
  );
}


export default Cars;
