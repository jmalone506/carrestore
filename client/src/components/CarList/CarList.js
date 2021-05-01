import React from "react";

import { Container, Row, Col } from "../Grid";


export function CarList({ children }) {
    return <ul className="list-group">{children}</ul>;
}


export function CarListItem({
    make,
    model
}) {
    return (
        <Container>
            <Row>

                <Col size="xs-12 sm-12">
                    <li className="list-group-item">

                        <h3>Make Name:{make}</h3>
                        <p>Model Name: {model}</p>


                    </li>
                </Col>
            </Row>
        </Container>
    );
}
