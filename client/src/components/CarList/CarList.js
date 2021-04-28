import React from "react";

import { Container, Row, Col } from "../Grid";


export function CarList({ children }) {
    return <ul className="list-group">{children}</ul>;
}


export function CarListItem({
    Make_Name,
    Model_Name
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                       
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>Make Name:{Make_Name}</h3>
                        <p>Model Name: {Model_Name}</p>

                    </Col>
                </Row>
            </Container>
        </li>
    );
}
