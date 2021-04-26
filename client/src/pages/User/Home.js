import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Welcome from "../../components/Welcome"


function Home() {


  return (
    <Container fluid>
      <Row>
        <Col size="lg-12">
      <Welcome />
        </Col>
      </Row>
      
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Image Carousel</h1>
          </Jumbotron>
        </Col>
      </Row>


      <Row>
        <Col size="md-8">
          <Jumbotron>
            <h1>About Car Hacks</h1>

          </Jumbotron>

        </Col>
        <Col size="md-4 sm-12">


        </Col>

      </Row>

      <Row>
        <Col size="md-8">
          <Jumbotron>
            <h1></h1>

          </Jumbotron>

        </Col>
        <Col size="md-4 sm-12">
          <Jumbotron>
            <h1></h1>
          </Jumbotron>
     
          

      

        </Col>
      </Row>
    </Container>
  );
}


export default Home;
