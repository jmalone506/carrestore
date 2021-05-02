import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import SellingCard from "../../components/Cards/SellingCards";
import CarouselIMG from "../../components/Carousel/SellCarousel"

function Selling() {


    return (
        <Container fluid>

            <Navbar />
            <Row>
                <Col size="md-12">
                    <h1>Selling </h1>
                    <CarouselIMG />
                </Col>
            </Row>


            <SellingCard />


        </Container>
    );
}


export default Selling;
