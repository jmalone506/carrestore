import React from "react";
import { Col, Row, Container } from "../../components/Grid";



const HomeSection1 = () => {
    return (
      
            <Container>
                <Row>
                    <Col md="12" className="text-center s1-intro">
                        <h1>Simple Systeme Fordiscount</h1>
                        <h3>nteger Cursus Bibendum Augue Ac Cursus .</h3>
                    </Col>
                    <Col md="6" lg="4" className="text-center s1-advice">
                        <img
                            className="s1-avatar"
                            src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/cloud.svg"
                            alt=""
                        />
                        <h3>introducing whatsup</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry
            </p>
                        <a href="">read more</a>
                    </Col>
                    <Col md="6" lg="4" className="text-center s1-advice">
                        <img
                            className="s1-avatar"
                            src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/planet.svg"
                            alt=""
                        />
                        <h3>user friendly interface</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry
            </p>
                        <a href="">read more</a>
                    </Col>
                    <Col md="6" lg="4" className="text-center s1-advice">
                        <img
                            className="s1-avatar"
                            src="https://bootstrapmade.com/demo/themes/eStartup/img/svg/asteroid.svg"
                            alt=""
                        />
                        <h3>Build the app everyone love</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry
            </p>
                        <a href="">read more</a>
                    </Col>
                </Row>
            </Container>
    )
}

export default HomeSection1
