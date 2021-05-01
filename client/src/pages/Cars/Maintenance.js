import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/MaintCarousel"

function Maintenance() {


    return (
        <Container fluid>

            <Navbar></Navbar>
            <Row>
                <Col size="md-12">
                    <h1>Maintenance </h1>
                    <CarouselIMG />
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


export default Maintenance;
