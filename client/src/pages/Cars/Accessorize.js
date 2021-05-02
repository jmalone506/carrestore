import React from "react";

import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import Access from "../../components/Cards/Access"
import CarouselIMG from "../../components/Carousel/AccessCarousel"


function Accessorize() {



    return (
        <div>
            <Navbar />
            <CarouselIMG />
            <Container>

                <Access />

            </Container>
        </div>
    );
}

export default Accessorize;


