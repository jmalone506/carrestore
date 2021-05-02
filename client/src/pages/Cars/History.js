import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
// import AllCards from "../../components/Cards";


function History() {


    return (
        <Container fluid>

            <Navbar />
            <Row>
                <Col size="md-12">
                    <h1>Your Recent Searches </h1>
                    <Jumbotron>
                        <h1>Image</h1>
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
        </Container>
    );
}


export default History;
