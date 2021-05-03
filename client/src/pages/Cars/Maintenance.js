import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import CarouselIMG from "../../components/Carousel/MaintCarousel"
import MaintCards from "../../components/Cards/MaintCards";

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
                <Col size="md-12">
                    <MaintCards />
                </Col>
            </Row>
        </Container>
    );
}


export default Maintenance;
