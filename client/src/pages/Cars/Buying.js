import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Cards from "../../components/Cards/BuyingCards"
import CarouselIMG from "../../components/Carousel/BuyCarousel"

function Buying() {


    return (
        <Container fluid center>

            <Navbar></Navbar>
            <Row>
                <Col size="md-12">
                    <h1>Buying </h1>
                    <CarouselIMG />
                </Col>
            </Row>


            < Cards />

        </Container>

    );
}


export default Buying;
