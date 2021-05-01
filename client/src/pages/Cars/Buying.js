import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards/BuyingCards"


function Buying() {


    return (
        <Container fluid center>

            <Navbar></Navbar>
            <Row>
                <Col size="md-12">
                    <h1>Buying </h1>
                    <Jumbotron>
                        <h1>Image</h1>
                    </Jumbotron>
                </Col>
            </Row>


            < Cards />

        </Container>

    );
}


export default Buying;
