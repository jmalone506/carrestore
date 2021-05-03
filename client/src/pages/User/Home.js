import Header from "../../components/Header";
import { Col, Row, Container } from "../../components/Grid";
import Welcome from "../../components/Welcome"
import "./style.css"

function Home() {


  return (
    <Container fluid className="homebackground">

      <Welcome />

      <Row>
        <Col size="md-12">

          <Header />


        </Col>
      </Row>


    </Container>
  );
}


export default Home;
