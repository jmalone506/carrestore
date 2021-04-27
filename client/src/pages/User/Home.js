import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";
import Welcome from "../../components/Welcome"
import "./style.css"

function Home() {


  return (
    <Container fluid className="background">
      <Row>
        <Col size="lg-12">
      <Welcome />
        </Col>
      </Row>
      
      <Row>
        <Col size="md-12">
         
          <Header>
 
          </Header>
        </Col>
      </Row>


      <Row>
        <Col size="md-8">
          

        </Col>
        <Col size="md-4 sm-12">


        </Col>

      </Row>

      <Row>
        <Col size="md-8">
     

        </Col>
        <Col size="md-4 sm-12">
       
     
          

      

        </Col>
      </Row>
    </Container>
  );
}


export default Home;
