import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

function Cars() {
  // Setting our component's initial state
  const [cars, setCars] = useState([])
  const [formObject, setFormObject] = useState({
  })

  // Load all books and store them with setBooks
  useEffect(() => {
    loadCars()
  }, [])

  // Loads all books and sets them to books
  function loadCars() {
    API.getCars()
      .then(res => 
        setCars(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteCar(id) {
    API.deleteCar(id)
      .then(res => loadCars())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveCar({
        model: formObject.model,
        make: formObject.make,
        year: formObject.year
      })
        .then(() => setFormObject({
          model: "",
          make: "",
          year: ""
        }))
        .then(() => loadCars())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What car?</h1>
            </Jumbotron>
            <form>
              <Input
                onChange={handleInputChange}
                name="model"
                placeholder="model(required)"
                value={formObject.model}
              />
              <Input
                onChange={handleInputChange}
                name="make"
                placeholder="make (required)"
                value={formObject.make}
              />
              <TextArea
                onChange={handleInputChange}
                name="year"
                placeholder="year (Optional)"
                value={formObject.year}
              />
              <FormBtn
                // disabled={!(formObject.model && formObject.make)}
                onClick={handleFormSubmit}
              >
                Submit car
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>cars On My List</h1>
            </Jumbotron>
            {cars.length ? (
              <List>
                {cars.map(car => {
                  return (
                    <ListItem key={car._id}>
                      <a href={"/cars/" + car._id}>
                        <strong>
                          {car.model} by {car.make}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() => deleteCar(car._id)} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Cars;
