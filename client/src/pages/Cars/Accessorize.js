import React, { useState } from "react";
import Jumbotron from "../../components/Jumbotron";

import { Col, Row, Container } from "../../components/Grid";
import Navbar from "../../components/Navbar";
import { Input } from "../../components/Form/";
import Button from "../../components/Button";
import API from "../../utils/API";
import { CarList, CarListItem } from "../../components/CarList/CarList";


function Accessorize() {

    const [cars, setCars] = useState([]);
    const [carSearch, setCarSearch] = useState("");

    const handleInputChange = event => {

        const { value } = event.target;
        setCarSearch(value);
    };

    const handleFormSubmit = event => {

        event.preventDefault();
        API.getList(carSearch)
            .then(res => setCars(res.data))
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Navbar />
            <Jumbotron />
            <Container>
                <Row>
                    <Col size="md-12">
                        <form>
                            <Container>
                                <Row>
                                    <Col size="xs-9 sm-10">
                                        <Input
                                            name="CarSearch"
                                            value={carSearch}
                                            onChange={handleInputChange}
                                            placeholder="Search For a Car"
                                        />
                                    </Col>
                                    <Col size="xs-3 sm-2">
                                        <Button
                                            onClick={handleFormSubmit}
                                            type="success"
                                            
                                        >
                                            Search
                    </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </Col>
                </Row>
                <Row>
                    <Col size="xs-12">
                        {!cars.length ? (
                            <h1 className="text-center">No Cars to Display</h1>
                        ) : (
                            <CarList>
                                ({cars.map(car => {
                                    return (
                                        <CarListItem
                                            Make_Name={car.Make_Name}
                                            Model_Name={car.Model_Name}
                                        />
                                    );
                                })})
                            </CarList>
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Accessorize;


