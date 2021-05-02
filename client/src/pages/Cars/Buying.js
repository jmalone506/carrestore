import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import BuyingCards from "../../components/Cards/BuyingCards.js"
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

            <BuyingCards />


        </Container>

    );
}


export default Buying;
