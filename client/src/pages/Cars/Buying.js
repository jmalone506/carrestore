import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import Background from "../../assets/images/Background-1.jpg"

import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

import { Input, TextArea, FormBtn } from "../../components/Form";
import Navbar from "../../components/Navbar";

function Buying() {


    return (
        <Container fluid>

            <Navbar></Navbar>
            <Row>
                <Col size="md-12">
                    <h1>Buying </h1>
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


export default Buying;
