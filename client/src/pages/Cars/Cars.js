import React, { useState } from "react";
import axios from "axios";

import { Col, Row, Container } from "../../components/Grid";
import { CarList, CarListItem } from "../../components/CarList/CarList";
import { Input } from "../../components/Form/";
import Navbar from "../../components/Navbar";
import Button from "../../components/Button";
import CarouselIMG from "../../components/Carousel/Carousel"

function Cars() {

  const [cars, setCars] = useState([]);
  const [carSearch, setCarSearch] = useState("");

  const handleInputChange = event => {

    const { value } = event.target;
    setCarSearch(value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    axios
      .get('/accessorize?q=' + carSearch)
      .then(response => {

        console.log(response)
        if (response.status === 200) {

          setCars(response.data)
        }
      }).catch(error => {

        console.log(' error: ')
        console.log(error);

      })


  };

  return (
    <div>
      <Navbar></Navbar>
      <Row>
        <Col size="md-12">
          <h1>Welcome </h1>

          <CarouselIMG />
        </Col>
      </Row>
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
          <Col size="col-12">
            {!cars.length ? (
              <h1 className="text-center" style={{ color: "#FFFFFF" }}>No Cars to Display</h1>
            ) : (
              <CarList>
                ({cars.map(car => {
                return (
                  <CarListItem
                    key={car._id}
                    make={car.make}
                    model={car.model}
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

export default Cars;


