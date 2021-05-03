import React from "react";

import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Access from "../../components/Cards/AccessCards"
import CarouselIMG from "../../components/Carousel/AccessCarousel"


function Accessorize() {



    return (
        <div>
            <Navbar />
            <CarouselIMG />

            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Access />
                    </Col>
                </Row>


            </Container>
        </div>
    );
}

export default Accessorize;


