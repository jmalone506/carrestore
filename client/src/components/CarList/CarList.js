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
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                       
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>Make Name:{make}</h3>
                        <p>Model Name: {model}</p>

                    </Col>
                </Row>
            </Container>
        </li>
    );
}
